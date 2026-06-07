import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function SkillsTools() {
  return (
    <View style={styles.toolsContainer}>
      <View style={styles.toolsLayoutUI}>
        <View style={styles.titleUI}>
          <Image
            source={require('../../../assets/Images/TechnicalSkillsActiveIcon.png')}
            alt="Tools Logo"
            style={styles.toolLogo}
          />
          <Text style={styles.toolText}>Tools</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toolsContainer: {
    marginTop: 8,
    justifyContent: 'flex-start',
  },
  toolsLayoutUI: {
    marginHorizontal: 16,
    padding: 8,
  },
  titleUI: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolLogo: {
    width: 19,
    height: 18,
  },
  toolText: {
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
    marginLeft: 16,
  },
});

export default SkillsTools;
