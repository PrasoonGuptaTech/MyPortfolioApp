import React from 'react';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function ContactCVEmail() {
  const onEmailPressHandler = () => Linking.openURL('mailto:ishankgupta1may@gmail.com');
  return (
    <View style={styles.cvEmailContainer}>
      <View style={styles.cvEmailUI}>
        <View style={styles.contentLayout}>
          <View style={[styles.boxLayout, { backgroundColor: PortfolioColors.brightOrange }]}>
            <Image
              source={require('../../../assets/Images/CVIcon.png')}
              alt="CV Logo"
              style={styles.cvLogo}
            />
            <Text style={styles.cvText}>RESUME</Text>
          </View>
          <Pressable
            style={[styles.boxLayout, { backgroundColor: PortfolioColors.paleGrey }]}
            onPress={onEmailPressHandler}
          >
            <Image
              source={require('../../../assets/Images/EmailIcon.png')}
              alt="Email Logo"
              style={styles.emailLogo}
            />
            <Text style={styles.emailText}>EMAIL</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cvEmailContainer: {
    marginTop: 16,
    justifyContent: 'center',
  },
  cvEmailUI: {
    marginHorizontal: 16,
  },
  contentLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxLayout: {
    padding: 8,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: '49%',
    minHeight: 83,
  },
  cvLogo: {
    width: 20,
    height: 25,
  },
  cvText: {
    fontWeight: 'semibold',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'center',
    marginLeft: 8,
  },
  emailLogo: {
    width: 25,
    height: 25,
  },
  emailText: {
    fontWeight: 'semibold',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'center',
    marginLeft: 8,
  },
});

export default ContactCVEmail;
