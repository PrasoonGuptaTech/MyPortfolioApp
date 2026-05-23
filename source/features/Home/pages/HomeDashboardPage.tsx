import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/header/HomeHeader';
import HomeObjective from '../components/objective/HomeObjective';
import HomeProjects from '../components/projects/HomeProjects';
import { ScrollView, StyleSheet } from 'react-native';
import HomeActiveProject from '../components/activeProject/HomeActiveProject';
import HomeTechStack from '../components/homeTechStack/HomeTechStack';

function HomeDashboard() {
  return (
    <SafeAreaView>
      <HomeHeader />
      <ScrollView style={styles.container}>
        <HomeObjective />
        <HomeProjects />
        <HomeActiveProject />
        <HomeTechStack />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 112,
  },
});

export default HomeDashboard;
