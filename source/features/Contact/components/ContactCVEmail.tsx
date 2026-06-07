import React from 'react';
import { Alert, Image, Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';
import ReactNativeBlobUtil from 'react-native-blob-util';

function ContactCVEmail() {
  const onEmailPressHandler = () => Linking.openURL('mailto:ishankgupta1may@gmail.com');
  const onCVDownloadHandler = async () => {
    try {
      const { dirs } = ReactNativeBlobUtil.fs;
      if (Platform.OS === 'android') {
        const tempCachePath = `${dirs.CacheDir}/PrasoonCV.pdf`;
        await ReactNativeBlobUtil.fs.cp(ReactNativeBlobUtil.fs.asset('Prasoon.pdf'), tempCachePath);
        await ReactNativeBlobUtil.MediaCollection.copyToMediaStore(
          { name: 'PrasoonCV.pdf', parentFolder: '', mimeType: 'application/pdf' },
          'Download',
          tempCachePath,
        );
        await ReactNativeBlobUtil.fs.unlink(tempCachePath);
        Alert.alert('Download Successfully', 'CV Downloaded Succesfully', [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
      } else {
        const localPath = `${dirs.DocumentDir}/PrasoonCV.pdf`;
        const bundlePath = `${ReactNativeBlobUtil.fs.asset('')}/${'Prasoon.pdf'}`;
        const fileExist = await ReactNativeBlobUtil.fs.exists(localPath);
        if (fileExist) {
          await ReactNativeBlobUtil.fs.unlink(localPath);
        }
        await ReactNativeBlobUtil.fs.cp(bundlePath, localPath);
        ReactNativeBlobUtil.ios.previewDocument(localPath);
        Alert.alert('Download Successfully', 'CV Downloaded Succesfully', [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.cvEmailContainer}>
      <View style={styles.cvEmailUI}>
        <View style={styles.contentLayout}>
          <Pressable
            style={[styles.boxLayout, { backgroundColor: PortfolioColors.brightOrange }]}
            onPress={onCVDownloadHandler}
          >
            <Image
              source={require('../../../assets/Images/CVIcon.png')}
              alt="CV Logo"
              style={styles.cvLogo}
            />
            <Text style={styles.cvText}>RESUME</Text>
          </Pressable>
          <Pressable
            style={[styles.boxLayout, { backgroundColor: PortfolioColors.paleGrey }]}
            onPress={onEmailPressHandler}
          >
            <Image
              source={require('../../../assets/Images/EmailIcon.png')}
              alt="Email Logo"
              style={styles.emailLogo}
            />
            <Text style={styles.emailText}>EMAIL</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cvEmailContainer: {
    marginTop: 16,
    justifyContent: 'center',
  },
  cvEmailUI: {
    marginHorizontal: 16,
  },
  contentLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxLayout: {
    padding: 8,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: '49%',
    minHeight: 83,
  },
  cvLogo: {
    width: 20,
    height: 25,
  },
  cvText: {
    fontWeight: 'semibold',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'center',
    marginLeft: 8,
  },
  emailLogo: {
    width: 25,
    height: 25,
  },
  emailText: {
    fontWeight: 'semibold',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'center',
    marginLeft: 8,
  },
});

export default ContactCVEmail;
