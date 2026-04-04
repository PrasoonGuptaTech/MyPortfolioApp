import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
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
  const onBackNavigationHandler = () => navigation?.goBack();
  const onCompanyLinkPressHandler = () =>
    Linking.openURL(`${workExperience?.companyUrl}`);
  const appLinkPressHandler = () =>
    Linking.openURL(`${workExperience?.appLink}`);
  return (
    <SafeAreaView>
      <ScrollView>
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
        {workExperience?.techSkills?.map(item => (
          <View style={styles.techSkillsRow} key={item?.toString()}>
            <Text style={styles.techSkillsTitle}>{'\u{25C9}'}</Text>
            <Text style={styles.techSkillsTitle}>{item}</Text>
          </View>
        ))}
        <Text style={styles.skillsTitle}>Other Skills</Text>
        {workExperience?.otherSkills?.map(item => (
          <View style={styles.techSkillsRow} key={item?.toString()}>
            <Text style={styles.techSkillsTitle}>{'\u{25C9}'}</Text>
            <Text style={styles.techSkillsTitle}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});

export default WorkExperienceDetailPage;
