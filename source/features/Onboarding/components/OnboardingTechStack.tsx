import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import FloatingBubbles from './FloatingBubbles';
import { AllUniqueSkills } from '../Utility/Utility';

const { height } = Dimensions.get('window');

function OnboardingTechStack() {
  const allSkills = AllUniqueSkills();
  return (
    <ImageBackground
      source={require('../../../assets/Images/OnboardingBackground.png')}
      style={styles.onboardingBackgroundImage}
    >
      {allSkills?.map((item: any) => (
        <FloatingBubbles
          key={item?.projectId}
          floatingBubbleTitle={item?.projectTitle}
          floatingBubbleImage={item?.projectTitleLogo}
          floatingBubbleStyle={{
            top: item?.projectTitleTopView,
            left: item?.projectTitleLeftView,
            width: item?.projectTitleWidth,
            backgroundColor: item?.projectTitleBackgroundColor,
          }}
          floatingImageStyle={{
            width: item?.projectIconWidth,
            height: item?.projectIconHeight,
          }}
          floatingTextStyle={{
            color: item?.projectTechNameColor,
          }}
        />
      ))}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  onboardingBackgroundImage: {
    width: '100%',
    height: height * 0.433,
    marginTop: 8,
  },
});

export default OnboardingTechStack;
