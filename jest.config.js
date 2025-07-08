module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'expo-linear-gradient': '<rootDir>/__mocks__/expo-linear-gradient.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|expo|@expo|@unimodules|@testing-library|react-native-reanimated|react-native-gesture-handler|@react-native-community|@react-native-masked-view|@react-native-picker|@react-native-async-storage|@react-native-segmented-control|@react-native-clipboard|@react-native-community|@react-native-safe-area-view|@react-native-safe-area-context|@react-native-firebase|@react-native-google-signin|@react-native-community/netinfo|expo-web-browser|expo-router|expo-symbols)/)',
  ],
};
