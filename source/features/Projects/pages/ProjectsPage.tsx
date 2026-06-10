import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function ProjectsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.cominSoonText}>Coming Soon....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cominSoonText: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default ProjectsPage;
