import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { AppColors } from '../Theme/colors';
import { AppFontsSize } from '../Theme/fontSize';

const { width, height } = Dimensions.get('window');

type ProjectCarouselItemPropType = {
  projectItem: {
    isProjectDurationEnd: boolean;
    projectDurationEnd: string;
    projectName: string;
    projectDurationStart: string;
  };
};

function ProjectsCarousel(props: Readonly<ProjectCarouselItemPropType>) {
  const { projectItem } = props;
  let projectDuration = projectItem?.isProjectDurationEnd
    ? ` - ${projectItem?.projectDurationEnd}`
    : ' - Present';
  return (
    <View style={styles.cardView}>
      <Text style={styles.projectTitle} numberOfLines={1}>
        {projectItem?.projectName}
      </Text>
      <Text style={styles.durationTitle} numberOfLines={1}>
        {projectItem?.projectDurationStart}
        {projectDuration}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default ProjectsCarousel;
