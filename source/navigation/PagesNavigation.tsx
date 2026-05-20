import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashPage from '../features/Splash/pages/SplashPage';
import OnboardingPage from '../features/Onboarding/pages/OnboardingPage';
import HomeDashboard from '../features/Home/pages/HomeDashboardPage';
import ProjectsPage from '../features/Projects/pages/ProjectsPage';
import EducationCertsPage from '../features/Education/pages/EducationCertsPage';
import TechnicalSkillsPage from '../features/Skills/pages/TechnicalSkillsPage';
import ContactMePage from '../features/Contact/pages/ContactMePage';
import { PortfolioColors } from '../constants/colors';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Home: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Projects: undefined;
  EducationCerts: undefined;
  TechnicalSkills: undefined;
  ContactMe: undefined;
};

const PagesStack = createStackNavigator<RootStackParamList>();
const PagesTab = createBottomTabNavigator<RootTabParamList>();

function PagesTabNavigation() {
  return (
    <PagesTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          width: 351,
          height: 66,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          bottom: 32,
          borderWidth: 1,
          borderColor: PortfolioColors.black,
          borderRadius: 32,
          backgroundColor: PortfolioColors.black,
          zIndex: 1,
        },
        animation: 'shift',
      }}
    >
      <PagesTab.Screen
        name="Home"
        component={HomeDashboard}
        options={{
          headerShown: false,
        }}
      />
      <PagesTab.Screen name="Projects" component={ProjectsPage} options={{ headerShown: false }} />
      <PagesTab.Screen
        name="EducationCerts"
        component={EducationCertsPage}
        options={{ headerShown: false }}
      />
      <PagesTab.Screen
        name="TechnicalSkills"
        component={TechnicalSkillsPage}
        options={{ headerShown: false }}
      />
      <PagesTab.Screen
        name="ContactMe"
        component={ContactMePage}
        options={{ headerShown: false }}
      />
    </PagesTab.Navigator>
  );
}

function PagesNavigation() {
  return (
    <PagesStack.Navigator>
      <PagesStack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
      <PagesStack.Screen
        name="Onboarding"
        component={OnboardingPage}
        options={{ headerShown: false }}
      />
      <PagesStack.Screen
        name="Home"
        component={PagesTabNavigation}
        options={{ headerShown: false }}
      />
    </PagesStack.Navigator>
  );
}

export default PagesNavigation;
