import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WorkExperienceConst } from '../Constants/WorkExperienceConstant';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppFontsSize } from '../Theme/fontSize';
import { AppColors } from '../Theme/colors';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const isIOS = Platform.OS === 'ios';

type WorkExperienceDetailPageProps = {
  route: {
    params: {
      id: number;
    };
  };
};

function WorkExperienceDetailPage(
  props: Readonly<WorkExperienceDetailPageProps>,
) {
  const { route } = props;
  const { params } = route;
  const { id } = params;
  const navigation = useNavigation();
  const filteredWorkExperience = WorkExperienceConst.filter(
    item => item?.id === id,
  );
  const filteredWorkExperienceIndex = WorkExperienceConst.findIndex(
    item => item?.id === id,
  );
  const workExperience = filteredWorkExperience[filteredWorkExperienceIndex];
  const companyPresentEmployee = workExperience?.isCompanyPresentEmployee
    ? ' - Present'
    : workExperience?.companyDurationEnd;
  const projectDuration = workExperience?.isProjectDurationEnd
    ? workExperience?.projectDurationEnd
    : ' - Present';
  const onBackNavigationHandler = () => navigation?.goBack();
  const onCompanyLinkPressHandler = () =>
    Linking.openURL(`${workExperience?.companyUrl}`);
  const appLinkPressHandler = () =>
    Linking.openURL(`${workExperience?.appLink}`);
  const onContractorCompanyUrlPressHandler = () =>
    Linking.openURL(`${workExperience?.contactorCompanyUrl}`);
  return (
    <SafeAreaView>
      <ScrollView style={styles.layout}>
        <Pressable onPress={onBackNavigationHandler}>
          <Image
            source={require('../Assets/Images/BackArrow.png')}
            style={styles.backArrowView}
          />
        </Pressable>
        <Text style={styles.profileNameTitle}>
          {workExperience?.profileName}
        </Text>
        <Pressable onPress={onCompanyLinkPressHandler}>
          <Text style={styles.companyNameTitle}>
            {workExperience?.companyName}
          </Text>
        </Pressable>
        <Text style={styles.companyTimeline}>
          {workExperience?.companyDurationStart}
          {companyPresentEmployee}
        </Text>
        <Text numberOfLines={2} style={styles.companyDesc}>
          {workExperience?.companyDescription}
        </Text>
        {workExperience?.isAppLink ? (
          <Pressable onPress={appLinkPressHandler}>
            <Text style={styles.appName}>{workExperience?.appName}</Text>
          </Pressable>
        ) : null}
        <Text style={styles.skillsTitle}>Technical Skills</Text>
        {workExperience?.techSkills?.map((item: string) => (
          <View style={styles.techSkillsRow} key={item?.toString()}>
            <Text style={styles.techSkillsTitle}>{'\u{25C9}'}</Text>
            <Text style={styles.techSkillsTitle}>{item}</Text>
          </View>
        ))}
        <Text style={styles.skillsTitle}>Other Skills</Text>
        {workExperience?.otherSkills?.map((item: string) => (
          <View style={styles.techSkillsRow} key={item?.toString()}>
            <Text style={styles.techSkillsTitle}>{'\u{25C9}'}</Text>
            <Text style={styles.techSkillsTitle}>{item}</Text>
          </View>
        ))}
        {workExperience?.isAgile ? (
          <Text style={styles.agileTitle}>
            Agile Methodologies: <Text style={styles.agileBoolean}>Yes</Text>
          </Text>
        ) : (
          <Text style={styles.agileTitle}>
            Agile Methodologies: <Text style={styles.agileBoolean}>No</Text>
          </Text>
        )}
        {workExperience?.isCICD ? (
          <Text style={styles.agileTitle}>
            CI/CD Pipeline: <Text style={styles.agileBoolean}>Yes</Text>
          </Text>
        ) : (
          <Text style={styles.agileTitle}>
            CI/CD Pipeline: <Text style={styles.agileBoolean}>No</Text>
          </Text>
        )}
        <View style={styles.experienceLetterRow}>
          <Text style={styles.experienceLetterTitle}>Experience Letter: </Text>
          {workExperience?.isExperienceLetter ? (
            <Text style={styles.workExperienceLetterName}>
              {workExperience?.experienceLetterName}
            </Text>
          ) : (
            <Text style={styles.workExperienceLetterName}>No</Text>
          )}
          {workExperience?.isExperienceLetter ? (
            <Text style={styles.workExperienceDownloadIcon}>{'\u{2913}'}</Text>
          ) : null}
        </View>
        {workExperience?.isProjects ? (
          <View style={styles.projectDetailsView}>
            <Text style={styles.projectsTitle}>Projects</Text>
            <View style={styles.projectDescriptionRow}>
              <Text style={styles.projectRadio}>{'\u{25C9}'}</Text>
              <Text style={styles.projectTitle}>Title:</Text>
              <Text style={styles.projectTitleValue}>
                {workExperience?.projectName}
              </Text>
            </View>
            <View style={styles.projectDescriptionRow}>
              <Text style={styles.projectRadio}>{'\u{25C9}'}</Text>
              <Text style={styles.projectTitle}>Description:</Text>
              <Text style={styles.projectTitleValue}>
                {workExperience?.projectDescription}
              </Text>
            </View>
            <View style={styles.projectDescriptionRow}>
              <Text style={styles.projectRadio}>{'\u{25C9}'}</Text>
              <Text style={styles.projectTitle}>Duration:</Text>
              <Text style={styles.projectTitleValue}>
                {workExperience?.projectDurationStart}
                {projectDuration}
              </Text>
            </View>
          </View>
        ) : null}
        <View style={styles.experienceLetterRow}>
          <Text style={styles.experienceLetterTitle}>IT Sector: </Text>
          <Text style={styles.workExperienceLetterName}>
            {workExperience?.iTSectorBased}
          </Text>
        </View>
        {workExperience?.isContractor ? (
          <View style={styles.experienceLetterRow}>
            <Text style={styles.experienceLetterTitle}>Contactor: </Text>
            <Pressable onPress={onContractorCompanyUrlPressHandler}>
              <Text style={styles.workExperienceLetterName}>
                {workExperience?.contactorCompanyName}
              </Text>
            </Pressable>
          </View>
        ) : null}
        {workExperience?.isProductionSupport ? (
          <>
            <Text style={styles.skillsTitle}>Production Support Tools</Text>
            {workExperience?.prodSupportTools?.map((item: string) => (
              <View style={styles.techSkillsRow} key={item?.toString()}>
                <Text style={styles.techSkillsTitle}>{'\u{25C9}'}</Text>
                <Text style={styles.techSkillsTitle}>{item}</Text>
              </View>
            ))}
          </>
        ) : null}
        {workExperience?.isAwardsGiven ? (
          <>
            <Text style={styles.skillsTitle}>Awards & Achievements</Text>
            {workExperience?.awards?.map((item: string) => (
              <View style={styles.techSkillsRow} key={item?.toString()}>
                <Text style={styles.techSkillsTitle}>{'\u{25C9}'}</Text>
                <Text style={styles.techSkillsTitle}>{item}</Text>
              </View>
            ))}
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginVertical: 15,
  },
  backArrowView: {
    width: width / 8,
    height: height / 34,
    margin: 5,
    alignSelf: 'flex-start',
  },
  profileNameTitle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: AppFontsSize.lg,
    color: AppColors.mainTitleColor,
    marginHorizontal: 10,
  },
  companyNameTitle: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: AppFontsSize.md,
    color: AppColors.subTitleColor,
    marginHorizontal: 10,
  },
  companyTimeline: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: AppFontsSize.sm,
    color: AppColors.subTitleColor,
    marginHorizontal: 10,
  },
  companyDesc: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: AppFontsSize.md,
    color: AppColors.subTitleColor,
    marginTop: 10,
    marginHorizontal: 10,
  },
  appName: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: AppFontsSize.md,
    color: AppColors.subTitleColor,
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  skillsTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.md,
    color: AppColors.headingColor,
    marginTop: 15,
    marginHorizontal: 10,
  },
  techSkillsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginTop: 5,
  },
  techSkillsTitle: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: AppFontsSize.sm,
    color: AppColors.descriptionColor,
    marginHorizontal: 5,
  },
  agileTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.md,
    color: AppColors.headingColor,
    marginTop: 15,
    marginHorizontal: 10,
  },
  agileBoolean: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: AppFontsSize.sm,
    color: AppColors.descriptionColor,
    marginHorizontal: 5,
  },
  experienceLetterRow: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 10,
  },
  experienceLetterTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.md,
    color: AppColors.headingColor,
  },
  workExperienceLetterName: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: AppFontsSize.sm,
    color: AppColors.descriptionColor,
    marginHorizontal: 3,
    marginTop: 2.7,
  },
  workExperienceDownloadIcon: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: AppFontsSize.lg,
    color: AppColors.descriptionColor,
    marginHorizontal: 3,
    marginTop: isIOS ? 2.7 : 0,
  },
  projectDetailsView: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  projectsTitle: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppFontsSize.md,
    color: AppColors.headingColor,
  },
  projectDescriptionRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  projectRadio: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: AppFontsSize.sm,
    color: AppColors.descriptionColor,
    marginHorizontal: 5,
    marginTop: 2.3,
  },
  projectTitle: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: AppFontsSize.md,
    color: AppColors.headingColor,
  },
  projectTitleValue: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: AppFontsSize.sm,
    color: AppColors.descriptionColor,
    marginHorizontal: 5,
    marginTop: 2.7,
    maxWidth: '65%',
  },
});

export default WorkExperienceDetailPage;
