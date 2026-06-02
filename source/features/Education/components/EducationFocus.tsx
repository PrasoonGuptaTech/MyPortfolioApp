import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function EducationFocus() {
  return (
    <View style={styles.educationFocusContainer}>
      <View style={styles.focusLayoutView}>
        <View style={styles.focusLayout}>
          <View style={styles.positionLayout}>
            <Image
              source={require('../../../assets/Images/TimelineCubeLogo.png')}
              alt="Position Logo"
              style={styles.positionLogo}
            />
            <Text style={styles.focusText}>Focus</Text>
            <Text style={styles.positionText} numberOfLines={2}>
              React Native Developer
            </Text>
          </View>
          <View style={[styles.positionLayout, styles.certsLayout]}>
            <Image
              source={require('../../../assets/Images/CertificateLogoIcon.png')}
              alt="Position Logo"
              style={styles.positionLogo}
            />
            <Text style={[styles.focusText, styles.verifiedText]}>Verified</Text>
            <Text style={styles.positionText} numberOfLines={2}>
              1 Cert
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  educationFocusContainer: {
    margin: 16,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  focusLayoutView: {
    maxWidth: 350,
  },
  focusLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  positionLayout: {
    padding: 16,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    backgroundColor: PortfolioColors.oxfordWhite,
    width: '49%',
  },
  positionLogo: {
    width: 18,
    height: 19.71,
  },
  focusText: {
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.65,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 8,
  },
  positionText: {
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 8,
  },
  certsLayout: {
    backgroundColor: PortfolioColors.buttercupYellow,
  },
  verifiedText: {
    color: PortfolioColors.darkOliveGreen,
  },
});

export default EducationFocus;
