import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';
import { backgroundColorOverlay, timeDurationOverlay } from '../Utility/Utility';

function JourneyTimelineCard(props: any) {
  const { experienceItem } = props;
  let backgroundColor = backgroundColorOverlay(experienceItem);
  let timeDuration = timeDurationOverlay(experienceItem);
  const cardStyles = styles(backgroundColor);
  return (
    <View style={cardStyles.timelineCardContainer}>
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
      <View style={cardStyles.cardContainer}>
        <View style={cardStyles.rowAlignment}>
          <View style={cardStyles.logoLayout}>
            <Image
              source={experienceItem?.companyLogo}
              style={cardStyles.companyLogoImage}
              resizeMode="cover"
              alt={`${experienceItem?.companyName}`}
            />
          </View>
          <View style={cardStyles.contentLayout}>
            <Text style={cardStyles.jobTitleText}>{experienceItem?.jobTitle}</Text>
            <Text style={cardStyles.companyNameText}>{experienceItem?.companyName}</Text>
          </View>
        </View>
        <View style={cardStyles.timeDurationLayout}>
          <Text style={cardStyles.timeDurationText}>{timeDuration}</Text>
        </View>
        <Text>{experienceItem?.jobDescription}</Text>
        {experienceItem?.jobTechStack?.map((item: any) => (
          <Text key={item}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = (cardBackgroundColor: any) =>
  StyleSheet.create({
    timelineCardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
    },
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
    verticalLine: {
      flex: 1,
      width: 1,
      borderWidth: 1,
      borderColor: PortfolioColors.black,
      borderRadius: 8,
      backgroundColor: PortfolioColors.black,
    },
    cubeLogo: {
      width: 18,
      height: 19.71,
    },
    cardContainer: {
      width: 302,
      padding: 8,
      margin: 8,
      borderWidth: 1,
      borderColor: PortfolioColors.black,
      borderRadius: 24,
    },
    rowAlignment: {
      flexDirection: 'row',
    },
    logoLayout: {
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: PortfolioColors.black,
      justifyContent: 'center',
      alignItems: 'center',
    },
    companyLogoImage: {
      width: 24,
      height: 24,
    },
    contentLayout: {
      marginHorizontal: 8,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '80%',
    },
    jobTitleText: {
      fontWeight: 'bold',
      fontSize: 18,
      letterSpacing: 0,
      color: PortfolioColors.grey900,
      fontStyle: 'normal',
      textAlign: 'left',
    },
    companyNameText: {
      fontWeight: 'medium',
      fontSize: 14,
      letterSpacing: 0,
      color: PortfolioColors.sinopiaOrange,
      fontStyle: 'normal',
      textAlign: 'left',
    },
    timeDurationLayout: {
      padding: 8,
      marginVertical: 8,
      marginHorizontal: 8,
      marginRight: '40%',
      borderWidth: 1,
      borderColor: PortfolioColors.smoothWhite,
      borderRadius: 24,
      backgroundColor: PortfolioColors.smoothWhite,
    },
    timeDurationText: {
      fontWeight: 'semibold',
      fontSize: 14,
      letterSpacing: 0,
      color: PortfolioColors.darkGrey,
      fontStyle: 'normal',
      textAlign: 'left',
    },
  });

export default JourneyTimelineCard;
