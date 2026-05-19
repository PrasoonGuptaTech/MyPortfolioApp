import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from '../features/Splash/pages/SplashPage';

const PagesStack = createStackNavigator();

function PagesNavigation() {
  return (
    <PagesStack.Navigator>
      <PagesStack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
    </PagesStack.Navigator>
  );
}

export default PagesNavigation;
