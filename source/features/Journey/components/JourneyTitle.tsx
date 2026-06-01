import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function JourneyTitle() {
  return (
    <View style={styles.journeyTitleContainer}>
      <Text style={styles.titleStyle}>
        A timeline of professional growth and technical exploration
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  journeyTitleContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  titleStyle: {
    fontWeight: 'medium',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
  },
});

export default JourneyTitle;
