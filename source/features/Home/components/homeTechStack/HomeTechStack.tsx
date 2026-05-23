import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';
import { UniqueSkills } from '../../Utility/Utility';

function HomeTechStack() {
  let projects = UniqueSkills();
  return (
    <View style={styles.techStackView}>
      <View style={styles.techStackHeaderView}>
        <Text style={styles.techStackHeaderTitle}>Tech Stack</Text>
        <Image
          source={require('../../../../assets/Images/RightArrowIcon.png')}
          alt="Arrow Icon"
          style={styles.arrowStyle}
        />
      </View>
      <View style={styles.techSkillsView}>
        {projects?.map((item: any) => (
          <View key={item} style={styles.techSkillCardView}>
            <Text style={styles.techSkillText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  techStackView: {
    width: 350,
    minHeight: 226,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    backgroundColor: PortfolioColors.smoothWhite,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 24,
  },
  techStackHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    width: 300,
    height: 30,
  },
  techStackHeaderTitle: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  arrowStyle: {
    width: 20,
    height: 20,
  },
  techSkillsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    marginHorizontal: 24,
  },
  techSkillCardView: {
    marginRight: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    backgroundColor: PortfolioColors.classicChalk,
    justifyContent: 'center',
    alignItems: 'center',
  },
  techSkillText: {
    padding: 8,
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default HomeTechStack;
