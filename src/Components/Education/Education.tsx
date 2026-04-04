import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';

const { width, height } = Dimensions.get('window');

function Education() {
  return (
    <View style={styles.layout}>
      <Text style={styles.headingTitle}>Education</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardView}>
          <Text style={styles.degreeTitle} numberOfLines={1}>
            B.Tech - ECE
          </Text>
          <Text style={styles.InstituteTitle} numberOfLines={1}>
            GITM
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>
            July 2013 - May 2017
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.degreeTitle} numberOfLines={1}>
            12th
          </Text>
          <Text style={styles.InstituteTitle} numberOfLines={1}>
            S. R. Century Public School
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>
            Apr 2011 - Mar 2013
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.degreeTitle} numberOfLines={1}>
            10th
          </Text>
          <Text style={styles.InstituteTitle} numberOfLines={1}>
            Sainik Public School
          </Text>
          <Text style={styles.durationTitle} numberOfLines={1}>
            Apr 2009 - Mar 2011
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
    width: width / 1.3,
    height: height / 10,
    padding: 5,
    borderWidth: 1,
    borderColor: AppColors.workExperienceColor,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: AppColors.workExperienceColor,
    marginHorizontal: 5,
  },
  degreeTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.lg,
    color: AppColors.white,
    marginVertical: 1,
  },
  InstituteTitle: {
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

export default Education;
