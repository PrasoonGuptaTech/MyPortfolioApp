import { jest } from '@jest/globals';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
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

jest.mock('@react-native-camera-roll/camera-roll', () => ({
  CameraRoll: {
    save: jest.fn(),
    getPhotos: jest.fn(),
  },
}));

jest.mock('react-native-fs-turbo', () => ({
  __esModule: true,
  default: {
    readFile: jest.fn(),
    writeFile: jest.fn(),
    exists: jest.fn(),
    unlink: jest.fn(),
    mkdir: jest.fn(),
    downloadFile: jest.fn(),
  },
}));

jest.mock('react-native-blob-util', () => ({
  __esModule: true,
  default: {
    fs: {
      dirs: {},
      exists: jest.fn(),
      writeFile: jest.fn(),
      readFile: jest.fn(),
    },
    config: jest.fn(() => ({ fetch: jest.fn() })),
    fetch: jest.fn(),
  },
}));
