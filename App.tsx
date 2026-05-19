import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import PagesNavigation from './source/navigation/PagesNavigation';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PagesNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
