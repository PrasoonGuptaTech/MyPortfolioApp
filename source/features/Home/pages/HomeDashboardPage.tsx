import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/header/HomeHeader';
import HomeObjective from '../components/objective/HomeObjective';

function HomeDashboard() {
  return (
    <SafeAreaView>
      <HomeHeader />
      <HomeObjective />
    </SafeAreaView>
  );
}

export default HomeDashboard;
