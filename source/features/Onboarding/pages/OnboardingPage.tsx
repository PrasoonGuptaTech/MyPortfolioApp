import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PortfolioColors } from '../../../constants/colors';
import OnboardingHeader from '../components/OnboardingHeader';
import OnboardingTechStack from '../components/OnboardingTechStack';

const { width, height } = Dimensions.get('window');

function OnboardingPage() {
  return (
    <SafeAreaView style={styles.OnboardingPageContainer}>
      <View style={styles.OnboardingOuterLayout}>
        <OnboardingHeader />
        <OnboardingTechStack />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OnboardingPageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OnboardingOuterLayout: {
    width: width * 0.89,
    height: height * 0.8,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 32,
    backgroundColor: PortfolioColors.seaShellWhite,
  },
});

export default OnboardingPage;
