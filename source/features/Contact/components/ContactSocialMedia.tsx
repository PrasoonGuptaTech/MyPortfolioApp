import React from 'react';
import { FlatList, Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';
import { PortfolioSocialLinks } from '../../../constants/social';

function ContactSocialMedia() {
  const socialMediaRenderItem = ({ item }: { item: any }) => {
    const onLinkPressHandler = () => Linking.openURL(item?.socialLinkUrl);
    return (
      <Pressable style={styles.mediaUI} onPress={onLinkPressHandler}>
        <View style={styles.linkLogoUI}>
          <Image
            source={item?.socialLinkImage}
            alt={`${item?.socialLinkName}`}
            style={styles.socialLinkLogo}
          />
        </View>
        <Text style={styles.linkNameText}>{item?.socialLinkName}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.socialMediaContainer}>
      <View style={styles.socialMediaUI}>
        <View style={styles.socialMediaTitleUI}>
          <Image
            source={require('../../../assets/Images/TechnicalSkillsActiveIcon.png')}
            alt="Soical Media Logo"
            style={styles.socialMediaLogo}
          />
          <Text style={styles.socialMediaText}>Social Media</Text>
        </View>
        <FlatList
          data={PortfolioSocialLinks}
          keyExtractor={(item: any) => item?.id}
          renderItem={socialMediaRenderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.socialLinksLayout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  socialMediaContainer: {
    marginTop: 16,
    justifyContent: 'flex-start',
  },
  socialMediaUI: {
    marginHorizontal: 16,
  },
  socialMediaTitleUI: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialMediaLogo: {
    width: 19,
    height: 18,
  },
  socialMediaText: {
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
    marginLeft: 8,
  },
  socialLinksLayout: {
    marginTop: 8,
  },
  mediaUI: {
    padding: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.white,
    borderRadius: 24,
    minWidth: 128,
    minHeight: 118,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialLinkLogo: {
    width: 25,
    height: 25,
  },
  linkLogoUI: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.brightOrange,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkNameText: {
    fontWeight: 'semibold',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default ContactSocialMedia;
