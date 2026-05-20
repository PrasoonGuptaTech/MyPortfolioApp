import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import FloatingBubbles from './FloatingBubbles';
import { PortfolioFloatingTechStack } from '../../../constants/floatingTechStack';

const { height } = Dimensions.get('window');

function OnboardingTechStack() {
  return (
    <ImageBackground
      source={require('../../../assets/Images/OnboardingBackground.png')}
      style={styles.onboardingBackgroundImage}
    >
      {PortfolioFloatingTechStack?.map(item => (
        <FloatingBubbles
          key={item?.id}
          floatingBubbleTitle={item?.title}
          floatingBubbleImage={item?.titleLogo}
          floatingBubbleStyle={{
            top: item?.titleTopView,
            left: item?.titleLeftView,
            width: item?.titleWidth,
            backgroundColor: item?.titleBackgroundColor,
          }}
          floatingImageStyle={{
            width: item?.iconWidth,
            height: item?.iconHeight,
          }}
          floatingTextStyle={{
            color: item?.techNameColor,
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
