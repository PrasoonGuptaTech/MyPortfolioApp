import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AllUniqueTechnicalSkills } from '../Utility/Utility';
import { PortfolioColors } from '../../../constants/colors';

function SkillsFrontend() {
  const frontendSkills = AllUniqueTechnicalSkills();
  return (
    <View style={styles.frontendContainer}>
      <View style={styles.frontendLayoutUI}>
        <View style={styles.titleUI}>
          <Image
            source={require('../../../assets/Images/FrontendTitleLogo.png')}
            alt="Frontend Logo"
            style={styles.frontendLogo}
          />
          <Text style={styles.frontendTitleText}>Frontend</Text>
        </View>
        <View style={styles.contentUI}>
          {frontendSkills.map((skill: any) => (
            <View key={skill?.projectId} style={styles.skillLayoutUI}>
              <Text style={styles.skillText}>{skill?.projectTitle}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frontendContainer: {
    marginTop: 8,
    justifyContent: 'flex-start',
  },
  frontendLayoutUI: {
    marginHorizontal: 16,
    padding: 8,
  },
  titleUI: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frontendLogo: {
    width: 20,
    height: 12,
  },
  frontendTitleText: {
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
    marginLeft: 16,
  },
  contentUI: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillLayoutUI: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.white,
    borderRadius: 24,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontWeight: 'medium',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default SkillsFrontend;
