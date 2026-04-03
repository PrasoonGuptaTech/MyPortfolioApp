import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';

function Summary() {
  return (
    <View style={styles.layout}>
      <Text style={styles.headingTitle}>Professional Summary</Text>
      <Text style={styles.headingDescription}>
        React Native Developer with 5+ years of experience in cross-platform
        mobile development, performance optimization, and API integration.
        Currently React Native Developer at Scans.ai, driving efficiency in mobile
        architecture, scalability, and user experience. Expertise in React
        Native, JavaScript (ES6+), TypeScript, Redux, Firebase, RESTful APIs,
        and Git, with a strong focus on state management, mobile security, and
        performance tuning.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    maxWidth: '90%',
    alignSelf: 'center',
    marginTop: 30,
  },
  headingTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.lg,
    color: AppColors.headingColor,
    marginVertical: 1,
  },
  headingDescription: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: AppFontsSize.sm,
    color: AppColors.descriptionColor,
    marginVertical: 5,
  }
});

export default Summary;
