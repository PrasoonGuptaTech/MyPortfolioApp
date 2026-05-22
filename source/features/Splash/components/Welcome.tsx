import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';
import RadioCTA from './RadioCTA';

function Welcome() {
  return (
    <View style={styles.welcomeViewContainer}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={styles.portfolioView}>
        <RadioCTA />
        <Text style={styles.portfolioText}>PRASOON PORTFOLIO</Text>
        <RadioCTA />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeViewContainer: {
    marginTop: 8,
  },
  welcomeText: {
    fontWeight: '800',
    fontSize: 36,
    letterSpacing: -1.2,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  portfolioView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  portfolioText: {
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: 1.3,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'center',
    marginHorizontal: 8,
    marginVertical: 3,
  },
});

export default Welcome;
