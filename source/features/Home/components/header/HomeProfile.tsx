import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';

const {width} = Dimensions.get('window')

function HomeProfile() {
  return (
    <View style={styles.profilerContainerView}>
      <View style={styles.profileView}>
        <Image
          source={require('../../../../assets/Images/Profile_Prasoon.png')}
          style={styles.profileImageView}
        />
      </View>
      <View style={styles.nameTechStackContainer}>
        <Text style={styles.profileName}>Hi, I am Prasoon</Text>
        <View style={styles.buttonCTAView}>
          <Text style={styles.techStackName}>REACT NATIVE DEVELOPER</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilerContainerView: {
    width: width * 0.51,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileView: {
    width: 40,
    height: 40,
  },
  profileImageView: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 32,
  },
  nameTechStackContainer: {
    marginLeft: 8,
  },
  profileName: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  buttonCTAView: {
    width: width * 0.43,
    height: 32,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.buttercupYellow,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    padding: 4,
  },
  techStackName: {
    fontWeight: 'bold',
    fontSize: 10,
    letterSpacing: 0,
    color: PortfolioColors.darkOlive,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default HomeProfile;
