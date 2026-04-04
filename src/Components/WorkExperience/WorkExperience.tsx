import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';

const {width, height} = Dimensions.get('window');

function WorkExperience() {
  return (
    <View style={styles.layout}>
      <Text style={styles.headingTitle}>Work Experience</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardView}>
          <Text style={styles.profileTitle} numberOfLines={1}>React Native Developer</Text>
          <Text style={styles.companyTitle} numberOfLines={1}>Scans.AI</Text>
          <Text style={styles.durationTitle} numberOfLines={1}>April 2026 - Present</Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.profileTitle} numberOfLines={1}>Technology Lead</Text>
          <Text style={styles.companyTitle} numberOfLines={1}>Infosys Ltd.</Text>
          <Text style={styles.durationTitle} numberOfLines={1}>July 2021 - March 2026</Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.profileTitle} numberOfLines={1}>React Native Developer</Text>
          <Text style={styles.companyTitle} numberOfLines={1}>Wizlite Innovation Center</Text>
          <Text style={styles.durationTitle} numberOfLines={1}>Jan 2021 - Mar 2021</Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.profileTitle} numberOfLines={1}>Field Application Engineer</Text>
          <Text style={styles.companyTitle} numberOfLines={1}>
            RamaKrishna Electro Components Pvt. Ltd.
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>Nov 2019 - Nov 2020</Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.profileTitle} numberOfLines={1}>R & D Engineer</Text>
          <Text style={styles.companyTitle} numberOfLines={1}>Tiyatech Solutions Pvt. Ltd.</Text>
          <Text style={styles.durationTitle} numberOfLines={1}>Sept 2017 - Oct 2019</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  headingTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.lg,
    color: AppColors.headingColor,
    marginVertical: 1,
  },
  cardView: {
    width: width / 1.3,
    height: height / 9.5,
    padding: 5,
    borderWidth: 1,
    borderColor: AppColors.workExperienceColor,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: AppColors.workExperienceColor,
    marginHorizontal: 5,
  },
  profileTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.lg,
    color: AppColors.white,
    marginVertical: 1,
  },
  companyTitle: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: AppFontsSize.md,
    color: AppColors.white,
    marginVertical: 1,
  },
  durationTitle: {
    textAlign: 'right',
    fontWeight: '300',
    fontSize: AppFontsSize.sm,
    color: AppColors.white,
    marginVertical: 1,
  },
});

export default WorkExperience;
