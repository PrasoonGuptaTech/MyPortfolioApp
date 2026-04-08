import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';
import { WorkExperienceConst } from '../../Constants/WorkExperienceConstant';
import ProjectsCarousel from '../../ProjectsCarousel/ProjectsCarousel';

function Projects() {
  return (
    <View style={styles.layout}>
      <Text style={styles.headingTitle}>Projects</Text>
      <FlatList
        data={WorkExperienceConst}
        renderItem={({ item }) => <ProjectsCarousel projectItem={item} />}
        keyExtractor={item => item?.id?.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
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
});

export default Projects;
