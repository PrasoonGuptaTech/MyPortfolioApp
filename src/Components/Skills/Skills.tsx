import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';
import ProgrammingLangSkills from '../../SkillsComponents/ProgrammingSkills/ProgrammingLangSkills';
import WebsiteDevelopmentSkills from '../../SkillsComponents/WebsiteSkills/WebsiteDevelopmentSkills';
import MobileDevelopmentSkills from '../../SkillsComponents/MobileSkills/MobileDevelopmentSkills';
import ThirdPartyLibrariesSkills from '../../SkillsComponents/ThirdPartyLibrariesSkills/ThirdPartyLibrariesSkills';
import MonitoringTools from '../../SkillsComponents/MonitoringTools/MonitoringTools';
import TestingTools from '../../SkillsComponents/TestingTools/TestingTools';
import VersionControl from '../../SkillsComponents/VersionControl/VersionControl';
import PipelineSkills from '../../SkillsComponents/Pipeline/PipelineSkills';

function Skills() {
  return (
    <View style={styles.layout}>
      <Text style={styles.headingTitle}>Technical Skills</Text>
      <ProgrammingLangSkills />
      <WebsiteDevelopmentSkills />
      <MobileDevelopmentSkills />
      <ThirdPartyLibrariesSkills />
      <MonitoringTools />
      <TestingTools />
      <VersionControl />
      <PipelineSkills />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    width: '90%',
    marginTop: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
  headingTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.lg,
    color: AppColors.headingColor,
    marginVertical: 1,
  },
});

export default Skills;
