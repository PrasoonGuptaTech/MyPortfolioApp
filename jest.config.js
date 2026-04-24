module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jestSetup.js'],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)', '**/?(*.)+(spec|test).(ts|tsx|js)'],
  transformIgnorePatterns: ['node_modules/(?!(react-native|@react-native|@react-navigation)/)'],
};
