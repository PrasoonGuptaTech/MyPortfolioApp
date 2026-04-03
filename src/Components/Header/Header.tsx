import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AppFontsSize } from '../../Theme/fontSize';
import { AppColors } from '../../Theme/colors';

const { width, height } = Dimensions.get('window');

function Header() {
  const onEmailPressHandler = () =>
    Linking.openURL('mailto: ishankgupta1may@gmail.com');
  const onCallPressHandler = () => Linking.openURL('tel:8708248058');
  const onLinkedinPressHandler = () =>
    Linking.openURL('https://www.linkedin.com/in/prasoongupta-94a913105 ');
  const onGithubPressHandler = () =>
    Linking.openURL('https://github.com/PrasoonGuptaTech');
  return (
    <>
      <Text style={styles.mainTitle}>My Portfolio</Text>
      <Image
        source={require('../../Assets/Images/PrasoonProfile.png')}
        style={styles.profileImageLogo}
      />
      <Text style={styles.nameTitle}>Prasoon Gupta</Text>
      <Text style={styles.nameTitle}>React Native Developer</Text>
      <Pressable style={styles.rowView} onPress={onEmailPressHandler}>
        <Image
          source={require('../../Assets/Images/EmailIcon.png')}
          style={styles.emailLogo}
        />
        <Text style={styles.emailTile}> ishankgupta1may@gmail.com</Text>
      </Pressable>
      <Pressable onPress={onCallPressHandler}>
        <Text style={styles.emailTile}>{'\u{1F4DE}'} +91-8708248058</Text>
      </Pressable>
      <View style={styles.rowView}>
        <Pressable
          style={styles.rowSeperation}
          onPress={onLinkedinPressHandler}
        >
          <Image
            source={require('../../Assets/Images/LinkedinIcon.png')}
            style={styles.emailLogo}
          />
        </Pressable>
        <Pressable style={styles.rowSeperation} onPress={onGithubPressHandler}>
          <Image
            source={require('../../Assets/Images/GithubIcon.png')}
            style={styles.emailLogo}
          />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: AppFontsSize.lg,
    color: AppColors.mainTitleColor,
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
  profileImageLogo: {
    width: width / 3,
    height: height / 6,
    borderRadius: width / 6,
    alignSelf: 'center',
    marginVertical: 5,
  },
  nameTitle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: AppFontsSize.md,
    color: AppColors.subTitleColor,
    marginVertical: 1,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  emailLogo: {
    width: width / 17,
    height: height / 36,
    alignSelf: 'center',
  },
  emailTile: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: AppFontsSize.sm,
    color: AppColors.subTitleColor,
    marginVertical: 2,
  },
  rowSeperation: {
    marginHorizontal: 5,
  },
});

export default Header;
