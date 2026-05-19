import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

const { width } = Dimensions.get('window');

function OnboardingHeader() {
  console.log(width);
  return (
    <View style={styles.onboardingHeaderView}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Things I have expertise in...</Text>
        <Text style={styles.descriptionText}>
          Define a scalable mobile vision powered by React Native, modern architecture patterns,
          reusable UI systems, and high-performance cross-platform development.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  onboardingHeaderView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  headingView: {
    marginTop: 24,
    width: width * 0.726,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 32,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  descriptionText: {
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 5,
  }
});

export default OnboardingHeader;
