import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';
import { backgroundColorOverlay } from '../Utility/Utility';

function JourneyTimelineView(props: any) {
  const { experienceItem } = props;
  let backgroundColor = backgroundColorOverlay(experienceItem);
  const cardStyles = styles(backgroundColor);
  return (
    <View style={cardStyles.lineContainer}>
      <View style={cardStyles.imageWrapperView}>
        <Image
          source={require('../../../assets/Images/TimelineCubeLogo.png')}
          style={cardStyles.cubeLogo}
          alt="Timeline Logo"
        />
      </View>
      <View style={cardStyles.verticalLine} />
    </View>
  );
}
const styles = (cardBackgroundColor: any) =>
  StyleSheet.create({
    lineContainer: {
      alignItems: 'center',
    },
    imageWrapperView: {
      width: 40,
      height: 40,
      borderWidth: 1,
      borderColor: PortfolioColors.black,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: cardBackgroundColor,
    },
    cubeLogo: {
      width: 18,
      height: 19.71,
    },
    verticalLine: {
      flex: 1,
      width: 1,
      borderWidth: 1,
      borderColor: PortfolioColors.black,
      borderRadius: 8,
      backgroundColor: PortfolioColors.black,
    },
  });

export default JourneyTimelineView;
