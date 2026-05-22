import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/header/HomeHeader';
import HomeObjective from '../components/objective/HomeObjective';
import HomeProjects from '../components/projects/HomeProjects';

function HomeDashboard() {
  return (
    <SafeAreaView>
      <HomeHeader />
      <HomeObjective />
      <HomeProjects />
    </SafeAreaView>
  );
}

export default HomeDashboard;
