import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import HomeProjectsHeader from '../homeProjectsHeader/HomeProjectsHeader';
import HomeProjectsCard from '../homeProjectsCard/HomeProjectsCard';

const { width } = Dimensions.get('window');

function HomeProjects() {
  return (
    <View style={styles.homeProjectsContainer}>
      <HomeProjectsHeader />
      <HomeProjectsCard />
    </View>
  );
}

const styles = StyleSheet.create({
  homeProjectsContainer: {
    width: width * 0.87,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 8,
  },
});

export default HomeProjects;
