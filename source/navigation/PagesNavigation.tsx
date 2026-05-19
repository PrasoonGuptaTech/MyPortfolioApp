import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from '../features/Splash/pages/SplashPage';
import OnboardingPage from '../features/Onboarding/pages/OnboardingPage';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
};

const PagesStack = createStackNavigator<RootStackParamList>();

function PagesNavigation() {
  return (
    <PagesStack.Navigator>
      <PagesStack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
      <PagesStack.Screen
        name="Onboarding"
        component={OnboardingPage}
        options={{ headerShown: false }}
      />
    </PagesStack.Navigator>
  );
}

export default PagesNavigation;
