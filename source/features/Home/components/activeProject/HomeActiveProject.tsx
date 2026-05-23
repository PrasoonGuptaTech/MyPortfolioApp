import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';
import { PortfolioProjects } from '../../../../constants/projects';

function HomeActiveProject() {
  const activeProjectDetails = PortfolioProjects.find(
    (item: any) => item?.isActivilyWorking === true,
  );
  return (
    <View style={styles.activeProjectContainer}>
      <View style={styles.activeHeaderContainer}>
        <View>
          <View style={styles.activeNowCTA}>
            <Text style={styles.activeNowText}>ACTIVE NOW</Text>
          </View>
          <Text style={styles.activeNowProjectTitle}>{activeProjectDetails?.projectName}</Text>
        </View>
        <Image
          source={require('../../../../assets/Images/TypescriptTechStack.png')}
          style={styles.activeNowLogo}
        />
      </View>
      <Text style={styles.activeNowProjectDesc}>
        {activeProjectDetails?.projectShortDescription}
      </Text>
      <View style={styles.activeNowProjectCTA}>
        <Text style={styles.activeProjectCTAText}>OPEN IDE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeProjectContainer: {
    alignSelf: 'center',
    width: 350,
    minHeight: 275,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    backgroundColor: PortfolioColors.buttercupYellow,
    alignItems: 'center',
  },
  activeHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    height: 75,
    marginTop: 24,
  },
  activeNowCTA: {
    width: 106,
    height: 34,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeNowText: {
    fontWeight: 'medium',
    fontSize: 14,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  activeNowProjectTitle: {
    fontWeight: '700',
    fontSize: 22,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
    marginTop: 8,
  },
  activeNowLogo: {
    width: 25,
    height: 20,
  },
  activeNowProjectDesc: {
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.darkOliveGreen,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 8,
    paddingHorizontal: 24,
  },
  activeNowProjectCTA: {
    width: 107,
    height: 38,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 32,
    backgroundColor: PortfolioColors.seaShellWhite,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 24,
    marginHorizontal: 24,
  },
  activeProjectCTAText: {
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default HomeActiveProject;
