import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';

function MonitoringTools() {
  return (
    <View style={styles.layout}>
      <Text style={styles.headingTitle}>Monitoring Tools:</Text>
      <View style={styles.rowView}>
        <View style={styles.skillsLayout}>
            <Text style={styles.skillsTitle}>Firebase</Text>
        </View>
        <View style={styles.skillsLayout}>
            <Text style={styles.skillsTitle}>Dynatrae</Text>
        </View>
      </View>
      <View style={styles.rowView}>
        <View style={styles.skillsLayout}>
            <Text style={styles.skillsTitle}>Quantum</Text>
        </View>
        <View style={styles.skillsLayout}>
            <Text style={styles.skillsTitle}>Analytics</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginVertical: 5,
  },
  headingTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.md,
    color: AppColors.descriptionColor,
    marginVertical: 1,
  },
  rowView: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-around',
  },
  skillsLayout: {
    width: '40%',
    marginTop: 5,
  },
  skillsTitle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: AppFontsSize.md,
    backgroundColor: AppColors.skillsColor,
    color: AppColors.white,
    marginVertical: 1,
    borderWidth: 1,
    borderColor: AppColors.skillsColor,
    borderRadius: 10,
    padding: 3,
  }
});

export default MonitoringTools;
