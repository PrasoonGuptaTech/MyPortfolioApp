import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function ProfilePhilosophy() {
  return (
    <View style={styles.profilePhilosophyContainer}>
      <Text style={styles.philosophyText}>Philosophy</Text>
      <View style={styles.philosophyCardView}>
        <View style={styles.philosophyCardLayoutView}>
          <Image
            source={require('../../../assets/Images/ProjectsBrushIcon.png')}
            alt="Philosophy Icon"
            style={styles.philosophyIconStyle}
          />
          <Text style={styles.philosophyCardHeaderText}>Long-term thinking</Text>
          <Text style={styles.philosophyCardDescText}>
            Thinking about maintainability, monitoring, testing, and deployment
          </Text>
        </View>
        <View style={styles.philosophyCardLayoutView}>
          <Image
            source={require('../../../assets/Images/PhilosophyIcon.png')}
            alt="Philosophy Icon"
            style={styles.newPhilosophyIcon}
          />
          <Text style={styles.philosophyCardHeaderText}>Self-improvement</Text>
          <Text style={styles.philosophyCardDescText}>
            Continuous growth and professional positioning
          </Text>
        </View>
      </View>
      <View style={[styles.philosophyCardLayoutView, styles.newPhilosophyLayoutView]}>
        <Text style={styles.philosophyCardHeaderText}>Long-term thinking</Text>
        <Text style={styles.philosophyCardDescText}>
          Thinking about maintainability, monitoring, testing, and deployment
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePhilosophyContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  philosophyText: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'left',
    marginLeft: 16,
  },
  philosophyCardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    marginHorizontal: 8,
  },
  philosophyCardLayoutView: {
    width: 169,
    height: 169,
    borderWidth: 1,
    borderRadius: 20,
    padding: 16,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.oxfordWhite,
    marginRight: 8,
    marginHorizontal: 8
  },
  newPhilosophyLayoutView: {
    width: 350,
    height: 114,
    backgroundColor: PortfolioColors.buttercupYellow,
    marginHorizontal: 16,
  },
  philosophyIconStyle: {
    width: 19.65,
    height: 19.68,
  },
  newPhilosophyIcon: {
    width: 20,
    height: 16,
  },
  philosophyCardHeaderText: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 8,
  },
  philosophyCardDescText: {
    fontWeight: 'regular',
    fontSize: 14,
    letterSpacing: 0,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 8,
  },
});

export default ProfilePhilosophy;
