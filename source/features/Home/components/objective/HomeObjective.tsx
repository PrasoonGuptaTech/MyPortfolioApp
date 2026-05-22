import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';

function HomeObjective() {
  return (
    <View style={styles.objectiveView}>
      <Text style={styles.objectiveHeadingStyle}>
        Building high-performance mobile interfaces with precision
      </Text>
      <Text style={styles.objectiveDescStyle}>
        Crafting high-performance React Native ecosystems for modern mobile experiences.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  objectiveView: {
    width: 350,
    height: 176,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 20,
    backgroundColor: PortfolioColors.deepOrange,
    marginTop: 30,
    padding: 24,
  },
  objectiveHeadingStyle: {
    fontWeight: 700,
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  objectiveDescStyle: {
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 8,
  },
});

export default HomeObjective;
