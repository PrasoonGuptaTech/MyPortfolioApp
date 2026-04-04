import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';

function Awards() {
  return (
    <View style={styles.layout}>
      <Text style={styles.headingTitle}>Awards & Achievements</Text>
      <Text style={styles.headingDescription}>
        3P Award - Productivity, Performance & Process Excellence
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    maxWidth: '90%',
    alignSelf: 'center',
    marginTop: 10,
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
  },
});

export default Awards;
