import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text } from 'react-native';

const { height } = Dimensions.get('window');

function OnboardingTechStack() {
  return (
    <ImageBackground
      source={require('../../../assets/Images/OnboardingBackground.png')}
      style={styles.onboardingBackgroundImage}
    >
      <Text>Floating Bubbles</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  onboardingBackgroundImage: {
    width: '100%',
    height: height * 0.433,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingTechStack;
