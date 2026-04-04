import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';

const { width, height } = Dimensions.get('window');

function Projects() {
  return (
    <View style={styles.layout}>
      <Text style={styles.headingTitle}>Projects</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardView}>
          <Text style={styles.projectTitle} numberOfLines={1}>
            Consumer Mobile App
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>
            July 2021 - Mar 2026
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.projectTitle} numberOfLines={1}>
            Trade License
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>
            Jan 2021 - Mar 2021
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.projectTitle} numberOfLines={1}>
            Servo Voltage Stabilizer
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>
            Sept 2017 - Oct 2019
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.projectTitle} numberOfLines={1}>
            Friendship Zone
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>
            Jan 2023 - Feb 2023
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.projectTitle} numberOfLines={1}>
            Auto Mobile Mechanic
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>
            Jan 2023 - Feb 2023
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.projectTitle} numberOfLines={1}>
            Notes Making
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>
            Feb 2023 - Apr 2023
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 5,
  },
  headingTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.lg,
    color: AppColors.headingColor,
    marginVertical: 1,
  },
  cardView: {
    width: width / 1.5,
    height: height / 10,
    padding: 5,
    borderWidth: 1,
    borderColor: AppColors.workExperienceColor,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: AppColors.workExperienceColor,
    marginHorizontal: 5,
  },
  projectTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.lg,
    color: AppColors.white,
    marginVertical: 1,
  },
  durationTitle: {
    textAlign: 'right',
    fontWeight: '300',
    fontSize: AppFontsSize.sm,
    color: AppColors.white,
    marginVertical: 1,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});

export default Projects;
