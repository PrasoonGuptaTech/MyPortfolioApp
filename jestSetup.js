import { jest } from '@jest/globals';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
    dispatch: jest.fn(),
  }),
  useRoute: () => ({
    params: {},
  }),
  NavigationContainer: ({ children }) => children,
}));

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(() => ({
    Navigator: ({ children }) => children,
    Screen: ({ children }) => children,
  })),
}));
