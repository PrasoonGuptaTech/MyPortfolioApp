import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function ContactTitle() {
  return (
    <View style={styles.ContactTitleContainer}>
      <View style={styles.contactTitleUI}>
        <Text style={styles.titleText} numberOfLines={2}>
          Let's build something...
        </Text>
        <Text style={styles.descText} numberOfLines={2}>
          Interested in a project or just want to say hello? Drop an email below.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContactTitleContainer: {
    marginTop: 16,
    justifyContent: 'flex-start',
  },
  contactTitleUI: {
    marginHorizontal: 16,
    alignSelf: 'flex-start',
  },
  titleText: {
    fontWeight: 'semibold',
    fontSize: 48,
    letterSpacing: -2,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  descText: {
    marginTop: 8,
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
  },
});

export default ContactTitle;
