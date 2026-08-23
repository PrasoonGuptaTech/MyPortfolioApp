module.exports = {
  preset: 'react-native',
  resolver: 'react-native-worklets/jest/resolver.js',
  setupFilesAfterEnv: ['./jestSetup.js'],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)', '**/?(*.)+(spec|test).(ts|tsx|js)'],
  transformIgnorePatterns: ['node_modules/(?!(react-native|@react-native|@react-navigation|react-native-reanimated|react-native-worklets)/)'],
};
