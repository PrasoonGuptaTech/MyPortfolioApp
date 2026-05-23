import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/header/HomeHeader';
import HomeObjective from '../components/objective/HomeObjective';
import HomeProjects from '../components/projects/HomeProjects';
import { ScrollView, Text } from 'react-native';
import HomeActiveProject from '../components/activeProject/HomeActiveProject';
import HomeTechStack from '../components/homeTechStack/HomeTechStack';

function HomeDashboard() {
  return (
    <SafeAreaView>
      <HomeHeader />
      <ScrollView>
        <HomeObjective />
        <HomeProjects />
        <HomeActiveProject />
        <HomeTechStack />
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
