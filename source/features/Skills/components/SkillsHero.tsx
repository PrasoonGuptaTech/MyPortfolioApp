import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function SkillsHero() {
  return (
    <View style={styles.heroContainer}>
      <View style={styles.heroSectionLayout}>
        <Text style={styles.heroTitleText}>Core Expertise</Text>
        <Text style={styles.heroDescText}>
          Building intuitive mobile experiences through the perfect blend of logic, design, and
          performance.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  heroSectionLayout: {
    padding: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    backgroundColor: PortfolioColors.brightOrange,
  },
  heroTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  heroDescText: {
    marginTop: 8,
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'left',
  },
});

export default SkillsHero;
