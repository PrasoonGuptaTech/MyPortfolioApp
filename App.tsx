import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainPage from './src/pages/MainPage';

function App() {
  return (
    <SafeAreaProvider>
      <MainPage />
    </SafeAreaProvider>
  );
}

export default App;
