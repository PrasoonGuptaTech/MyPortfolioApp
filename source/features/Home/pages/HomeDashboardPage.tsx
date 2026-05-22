import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/header/HomeHeader';
import HomeObjective from '../components/objective/HomeObjective';
import HomeProjects from '../components/projects/HomeProjects';
import { ScrollView, Text } from 'react-native';

function HomeDashboard() {
  return (
    <SafeAreaView>
      <HomeHeader />
      <ScrollView>
        <HomeObjective />
        <HomeProjects />
        <Text>ABC</Text>
        <Text>ABC</Text>
        <Text>ABC</Text>
        <Text>ABC</Text>
        <Text>ABC</Text>
        <Text>ABC</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeDashboard;
