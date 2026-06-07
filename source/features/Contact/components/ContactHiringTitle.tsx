import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function ContactHiringTitle() {
  return (
    <View style={styles.contactContainer}>
      <View style={styles.contactLayoutUI}>
        <View style={styles.hiringTitleUI}>
          <Text style={styles.hiringTitleText}>AVAILABLE FOR HIRE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    justifyContent: 'flex-start',
    marginTop: 24,
  },
  contactLayoutUI: {
    marginHorizontal: 16,
    alignSelf: 'flex-start',
  },
  hiringTitleUI: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    backgroundColor: PortfolioColors.brightOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hiringTitleText: {
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: 0.65,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'left',
  },
});

export default ContactHiringTitle;
