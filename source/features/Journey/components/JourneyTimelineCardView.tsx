import React, { useState } from 'react';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { timeDurationOverlay } from '../Utility/Utility';
import { PortfolioColors } from '../../../constants/colors';

function JourneyTimelineCardView(props: any) {
  const { experienceItem } = props;
  const [hideDescriptionTextLine, setHideDescriptionTextLine] = useState(3);
  const [isHideChevronIcon, setIsHideChevronIcon] = useState(true);
  let timeDuration = timeDurationOverlay(experienceItem);
  const onImageLogoHandler = () => Linking.openURL(experienceItem?.companyURL);
  const onDescriptionTextLineHandler = () => {
    if (isHideChevronIcon) {
      setHideDescriptionTextLine(0);
      setIsHideChevronIcon(false);
    } else {
      setHideDescriptionTextLine(3);
      setIsHideChevronIcon(true);
    }
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowAlignment}>
        <Pressable style={styles.logoLayout} onPress={onImageLogoHandler}>
          <Image
            source={experienceItem?.companyLogo}
            style={styles.companyLogoImage}
            resizeMode="cover"
            alt={`${experienceItem?.companyName}`}
          />
        </Pressable>
        <View style={styles.contentLayout}>
          <Text style={styles.jobTitleText}>{experienceItem?.jobTitle}</Text>
          <Text style={styles.companyNameText}>{experienceItem?.companyName}</Text>
        </View>
      </View>
      <View style={styles.timeDurationLayout}>
        <Text style={styles.timeDurationText}>{timeDuration}</Text>
      </View>
      <View style={styles.descriptionLayout}>
        <Text style={styles.descriptionText} numberOfLines={hideDescriptionTextLine}>
          {experienceItem?.jobDescription}
        </Text>
        <Pressable onPress={onDescriptionTextLineHandler}>
          {isHideChevronIcon ? (
            <Image
              source={require('../../../assets/Images/DownChevronIcon.png')}
              alt="Chevron Icon"
              style={styles.downChevronImage}
            />
          ) : (
            <Image
              source={require('../../../assets/Images/DownChevronIcon.png')}
              alt="Chevron Icon"
              style={styles.upChevronImage}
            />
          )}
        </Pressable>
      </View>
      {experienceItem?.jobTechStack?.length > 0 && (
        <View style={styles.techStackLayout}>
          {experienceItem?.jobTechStack?.map((item: any) => (
            <View style={styles.techStackCTALayout} key={item}>
              <Text style={styles.techStackText}>{item}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
  descriptionLayout: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    fontWeight: 'regular',
    fontSize: 14,
    letterSpacing: 0,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
    marginRight: 8,
  },
  downChevronImage: {
    width: 12,
    height: 6,
  },
  upChevronImage: {
    width: 12,
    height: 6,
    transform: [{ rotate: '180deg' }],
  },
  techStackLayout: {
    padding: 8,
    marginHorizontal: 8,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  techStackCTALayout: {
    padding: 8,
    marginHorizontal: 4,
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.brightOrange,
    borderRadius: 24,
  },
  techStackText: {
    fontWeight: 'medium',
    fontSize: 12,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default JourneyTimelineCardView;
