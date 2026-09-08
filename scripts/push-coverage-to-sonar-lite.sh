#!/usr/bin/env bash
# Triggers a Sonar Lite scan of this repo's current branch, then pushes the
# local Jest coverage report (run `npm run test-coverage` first) so
# Overall/New Code coverage show up on the dashboard.
#
# Sonar Lite scans the GitHub remote, not this working tree, so the branch
# needs to already be pushed for the result to reflect what you just tested.
#
# Config (env vars, all optional except the project id if it ever changes):
#   SONAR_LITE_URL        default http://localhost:4000
#   SONAR_LITE_PROJECT_ID default the "Test Portfolio App" project id
#   SONAR_LITE_TOKEN      a project analysis token (Sonar Lite's "API Tokens"
#                         panel) — preferred; scoped to this one project only.
#   SONAR_LITE_USERNAME   fallback admin session login if no token is set
#   SONAR_LITE_PASSWORD   (default admin/admin) — broader access than a
#                         project token needs, avoid for anything but local use
#   LCOV_PATH             default coverage/lcov.info
set -euo pipefail

SONAR_LITE_URL="${SONAR_LITE_URL:-http://localhost:4000}"
SONAR_LITE_PROJECT_ID="${SONAR_LITE_PROJECT_ID:-239f278b-47b2-4006-b666-0cdbbd00012e}"
LCOV_PATH="${LCOV_PATH:-coverage/lcov.info}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [ ! -f "$LCOV_PATH" ]; then
  echo "No coverage report at $LCOV_PATH — run \`npm run test-coverage\` first." >&2
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Warning: uncommitted changes present. Sonar Lite scans the GitHub remote," >&2
  echo "not this working tree — commit and push first so the scan matches this coverage run." >&2
fi

COOKIE_JAR="$(mktemp)"
trap 'rm -f "$COOKIE_JAR"' EXIT

if [ -n "${SONAR_LITE_TOKEN:-}" ]; then
  # Basic Auth, token as the username, blank password — the same convention
  # sonar-scanner uses against real SonarQube. Scoped to this one project
  # only (can't touch settings, other projects, or anything a full admin
  # session can); no login call needed.
  AUTH_ARGS=(-u "${SONAR_LITE_TOKEN}:")
else
  SONAR_LITE_USERNAME="${SONAR_LITE_USERNAME:-admin}"
  SONAR_LITE_PASSWORD="${SONAR_LITE_PASSWORD:-admin}"
  echo "No SONAR_LITE_TOKEN set — falling back to an admin session login at $SONAR_LITE_URL." >&2
  echo "Prefer a project token (Sonar Lite's API Tokens panel) for anything beyond local use." >&2
  curl -sf -c "$COOKIE_JAR" -X POST "$SONAR_LITE_URL/api/auth/login" \
    -H "Content-Type: application/json" \
    -d "{\"username\":\"$SONAR_LITE_USERNAME\",\"password\":\"$SONAR_LITE_PASSWORD\"}" \
    -o /dev/null
  AUTH_ARGS=(-b "$COOKIE_JAR")
fi

echo "Scanning branch '$BRANCH'..."
curl -sf "${AUTH_ARGS[@]}" -X POST "$SONAR_LITE_URL/api/projects/$SONAR_LITE_PROJECT_ID/scan" \
  -H "Content-Type: application/json" \
  -d "{\"branch\":\"$BRANCH\"}" -o /dev/null

echo "Pushing coverage report ($LCOV_PATH)..."
curl -sf "${AUTH_ARGS[@]}" -X POST "$SONAR_LITE_URL/api/projects/$SONAR_LITE_PROJECT_ID/coverage?branch=$BRANCH" \
  -H "Content-Type: text/plain" \
  --data-binary @"$LCOV_PATH"
echo
echo "Done — coverage pushed for '$BRANCH'."
