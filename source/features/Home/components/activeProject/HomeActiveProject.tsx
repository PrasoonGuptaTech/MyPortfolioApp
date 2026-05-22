import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';

function HomeActiveProject() {
  return (
    <View style={styles.activeProjectContainer}>
      <Text>Home Active Project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activeProjectContainer: {
    alignSelf: 'center',
    width: 350,
    height: 275,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    backgroundColor: PortfolioColors.buttercupYellow,
  },
});

export default HomeActiveProject;
