import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function RadioCTA() {
  return <View style={styles.filledRadioCTA} />;
}

const styles = StyleSheet.create({
  filledRadioCTA: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.black,
  },
});

export default RadioCTA;
