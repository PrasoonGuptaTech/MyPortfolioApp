import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function ProfileQuote() {
  return (
    <View style={styles.quoteViewContainer}>
      <View style={styles.layoutView}>
        <View style={styles.quoteLayout}>
          <Image
            source={require('../../../assets/Images/QuoteIcon.png')}
            alt="Quote Logo"
            style={styles.quoteLogo}
          />
          <Text style={styles.quoteText}>The best way to predict the future is to invent it.</Text>
        </View>
        <Text style={styles.quoteAuthor}>ALAN KAY</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quoteViewContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 8,
    marginHorizontal: 36,
  },
  layoutView: {
    width: 350,
    height: 156,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  quoteLayout: {
    flexDirection: 'row',
  },
  quoteLogo: {
    width: 16,
    height: 16,
    alignItems: 'center',
  },
  quoteText: {
    fontWeight: 'semibold',
    fontSize: 30,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
    marginBottom: 8,
  },
  quoteAuthor: {
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: 1.3,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default ProfileQuote;
