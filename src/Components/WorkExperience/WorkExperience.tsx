import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';
import { WorkExperienceConst } from '../../Constants/WorkExperienceConstant';
import WorkExperienceCarousel from '../../WorkExperienceCarousel/WorkExperienceCarousel';

const { width, height } = Dimensions.get('window');

function WorkExperience() {
  return (
    <View style={styles.layout}>
      <Text style={styles.headingTitle}>Work Experience</Text>
      <FlatList
        data={WorkExperienceConst}
        renderItem={({ item }) => {
          return <WorkExperienceCarousel workExperienceItem={item} />;
        }}
        keyExtractor={item => item?.id?.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginTop: 20,
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
