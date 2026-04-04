import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../pages/MainPage';
import WorkExperienceDetailPage from '../pages/WorkExperienceDetailPage';

export type RootStackParamList = {
  Home: undefined;
  WorkExperience: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

function PagesNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen
        name="WorkExperience"
        component={WorkExperienceDetailPage}
      />
    </Stack.Navigator>
  );
}

export default PagesNavigation;
