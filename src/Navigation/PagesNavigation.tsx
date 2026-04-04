import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../pages/MainPage';

const Stack = createStackNavigator();

function PagesNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={MainPage} />
    </Stack.Navigator>
  );
}

export default PagesNavigation;
