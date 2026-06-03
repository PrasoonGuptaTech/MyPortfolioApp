import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function EducationCertifications() {
  return (
    <View style={styles.certificationContainer}>
      <Text style={styles.certificationsTitle}>Certifications</Text>
      <View style={styles.certificationLayout}>
        <View style={styles.certificationLayoutUI}>
          <View style={styles.certificateLogoLayout}>
            <Image
              source={require('../../../assets/Images/ReactNativeTechStack.png')}
              alt="React Native Certificate Logo"
              style={styles.reactNativeCertificateLogo}
            />
          </View>
          <View style={styles.certificateContentLayout}>
            <Text style={styles.certificateNameText}>React Native Developer</Text>
            <View style={styles.certificationContentLayoutUI}>
              <Text style={styles.certificateCompanyText}>Infosys</Text>
              <View style={styles.certificateSeperationContentUI} />
              <Text style={styles.certificateCompanyText}>2022</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  certificationContainer: {
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 96,
    marginHorizontal: 32,
  },
  certificationsTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  certificationLayout: {
    padding: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    backgroundColor: PortfolioColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  certificationLayoutUI: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  certificateLogoLayout: {
    padding: 20,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 48,
    backgroundColor: PortfolioColors.brightOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reactNativeCertificateLogo: {
    width: 20,
    height: 20,
  },
  certificateContentLayout: {
    padding: 8,
    justifyContent: 'center',
    width: '75%',
    marginHorizontal: 8,
  },
  certificateNameText: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  certificationContentLayoutUI: {
    flexDirection: 'row',
    marginTop: 4,
  },
  certificateCompanyText: {
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
    marginRight: 4,
  },
  certificateSeperationContentUI: {
    width: 4,
    height: 4,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 2,
    backgroundColor: PortfolioColors.black,
    alignSelf: 'center',
    marginRight: 4,
  },
});

export default EducationCertifications;
