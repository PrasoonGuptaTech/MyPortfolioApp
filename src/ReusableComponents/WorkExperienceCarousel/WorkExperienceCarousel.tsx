import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import { AppColors } from '../../Theme/colors';
import { AppFontsSize } from '../../Theme/fontSize';

const { width, height } = Dimensions.get('window');

type WorkExperiencePropsType = {
  workExperienceItem: {
    profileName?: string;
    companyName?: string;
    companyDurationStart?: string;
    companyDurationEnd?: string;
    isCompanyPresentEmployee?: boolean;
  };
};

function WorkExperienceCarousel(props: Readonly<WorkExperiencePropsType>) {
  const { workExperienceItem } = props;
  let companyPresentEmployee = workExperienceItem?.isCompanyPresentEmployee
    ? ' - Present'
    : workExperienceItem?.companyDurationEnd;
  return workExperienceItem ? (
    <Pressable style={styles.cardView}>
      {!!workExperienceItem?.profileName && (
        <Text style={styles.profileTitle} numberOfLines={1}>
          {workExperienceItem?.profileName}
        </Text>
      )}
      {!!workExperienceItem?.companyName && (
        <Text style={styles.companyTitle} numberOfLines={1}>
          {workExperienceItem?.companyName}
        </Text>
      )}
      {!!(
        workExperienceItem?.companyDurationStart && companyPresentEmployee
      ) && (
        <Text style={styles.durationTitle} numberOfLines={1}>
          {workExperienceItem?.companyDurationStart}
          {`${companyPresentEmployee}`}
        </Text>
      )}
    </Pressable>
  ) : null;
}

const styles = StyleSheet.create({
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

export default WorkExperienceCarousel;
