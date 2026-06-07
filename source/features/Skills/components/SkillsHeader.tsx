import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

const { width } = Dimensions.get('window');

function SkillsHeader() {
  return (
    <View style={styles.profileHeaderView}>
      <Text style={styles.headerTitleStyle}>Technical Skills</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileHeaderView: {
    width: width,
    height: 74,
    borderBottomWidth: 4,
    borderColor: PortfolioColors.black,
    padding: 16,
    flexDirection: 'row',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
    marginHorizontal: 16,
    marginVertical: 4,
  },
});

export default SkillsHeader;
