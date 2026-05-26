import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

function ProfileHero() {
  return (
    <View style={styles.profileHeroContainer}>
      <Image
        source={require('../../../assets/Images/PrasoonFullProfile.png')}
        style={styles.profileFullView}
      />
      <View style={styles.profileTechView}>
        <Text style={styles.profileTechText}>REACT NATIVE DEVELOPER</Text>
      </View>
      <Text style={styles.profileNameText}>Prasoon</Text>
      <Text style={styles.profileOverview}>
        I bridge the gap between intuitive user experiences and scalable mobile architecture,
        building React Native applications that combine clean, modern design with robust engineering
        and high-performance cross-platform functionality.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileHeroContainer: {
    alignSelf: 'center',
    marginVertical: 8,
    marginTop: 16,
    width: width * 0.87,
    height: height * 0.75,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 20,
  },
  profileFullView: {
    width: '100%',
    height: height * 0.45,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileTechView: {
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 32,
    backgroundColor: PortfolioColors.buttercupYellow,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: 16,
    marginTop: 16,
  },
  profileTechText: {
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: 0.65,
    color: PortfolioColors.darkOlive,
    fontStyle: 'normal',
    textAlign: 'center',
    padding: 8,
  },
  profileNameText: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'center',
    marginTop: 16,
    marginHorizontal: 16,
    alignSelf: 'flex-start',
  },
  profileOverview: {
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 16,
    marginHorizontal: 16,
    alignSelf: 'flex-start',
  },
});

export default ProfileHero;
