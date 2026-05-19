import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Welcome from '../components/Welcome';
import EnvironmentProgress from '../components/EnvironmentProgress';

function SplashPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../assets/Images/PortfolioLogo.png')}
        alt="Portfolio Logo"
        style={styles.logoStyle}
      />
      <Welcome />
      <EnvironmentProgress />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 96,
    height: 96,
  },
});

export default SplashPage;
