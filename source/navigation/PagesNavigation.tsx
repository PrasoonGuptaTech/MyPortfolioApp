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
import { Dimensions, StyleSheet } from 'react-native';
import {
  ContactMeTabIcon,
  EducationCertsTabIcon,
  HomeTabIcon,
  ProjectsTabIcon,
  TechnicalSkillsTabIcon,
} from './Utility/TabIconUtility';
import ProfilePage from '../features/Profile/pages/ProfilePage';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Home: undefined;
  Profile: undefined;
};

export type RootTabParamList = {
  HomeTab: undefined;
  Projects: undefined;
  EducationCerts: undefined;
  TechnicalSkills: undefined;
  ContactMe: undefined;
};

const PagesStack = createStackNavigator<RootStackParamList>();
const PagesTab = createBottomTabNavigator<RootTabParamList>();

const { width } = Dimensions.get('window');

function PagesTabNavigation() {
  return (
    <PagesTab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarView,
        animation: 'shift',
      })}
    >
      <PagesTab.Screen
        name="HomeTab"
        component={HomeDashboard}
        options={{
          headerShown: false,
          tabBarIcon: HomeTabIcon,
        }}
      />
      <PagesTab.Screen
        name="Projects"
        component={ProjectsPage}
        options={{ headerShown: false, tabBarIcon: ProjectsTabIcon }}
      />
      <PagesTab.Screen
        name="EducationCerts"
        component={EducationCertsPage}
        options={{ headerShown: false, tabBarIcon: EducationCertsTabIcon }}
      />
      <PagesTab.Screen
        name="TechnicalSkills"
        component={TechnicalSkillsPage}
        options={{ headerShown: false, tabBarIcon: TechnicalSkillsTabIcon }}
      />
      <PagesTab.Screen
        name="ContactMe"
        component={ContactMePage}
        options={{ headerShown: false, tabBarIcon: ContactMeTabIcon }}
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
      <PagesStack.Screen name="Profile" component={ProfilePage} options={{ headerShown: false }} />
    </PagesStack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarView: {
    width: width * 0.87,
    height: 64,
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
});

export default PagesNavigation;
