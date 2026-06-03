import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import React from 'react';
import { Alert, Image, Modal, Pressable, StyleSheet, View } from 'react-native';
import RNFSTurbo from 'react-native-fs-turbo';

function EducationCertificateModal(props: any) {
  const { isCertificateModalOpen, setIsCertificateModalOpen } = props;
  const onBackHandler = () => setIsCertificateModalOpen(false);
  const onDownloadHandler = async () => {
    try {
      const imageAsset = Image.resolveAssetSource(
        require('../../../assets/Images/ReactNativeCertificate.png'),
      );
      const path = `${RNFSTurbo.DocumentDirectoryPath}/ReactNativeCertificate.png`;
      const response = await RNFSTurbo.downloadFile({
        fromUrl: imageAsset.uri,
        toFile: path,
      }).promise;
      if (response?.statusCode === 200) {
        await CameraRoll.saveAsset(path, {
          type: 'photo',
        });
        Alert.alert('Success', 'Image saved to Gallery', [
          {
            text: 'OK',
            onPress: () => setIsCertificateModalOpen(false),
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.modalContainer}>
      <Modal
        transparent={true}
        visible={isCertificateModalOpen}
        statusBarTranslucent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlayContainer}>
          <View style={styles.backDownloadContainer}>
            <View style={styles.backDownloadLayout}>
              <Pressable onPress={onBackHandler}>
                <Image
                  source={require('../../../assets/Images/RightWhiteArrowIcon.png')}
                  alt="Back Arrow Icon"
                  style={styles.backArrowIconStyle}
                />
              </Pressable>
              <Pressable onPress={onDownloadHandler}>
                <Image
                  source={require('../../../assets/Images/DownloadIcon.png')}
                  alt="Download Icon"
                  style={styles.downloadIconStyle}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.certificateViewLayout}>
            <Image
              source={require('../../../assets/Images/ReactNativeCertificate.png')}
              alt="React native Certificate"
              style={styles.certificateImageStyle}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(27, 28, 26, 0.8)',
  },
  modalOverlayContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(27, 28, 26, 0.8)',
  },
  backDownloadContainer: {
    marginTop: 108,
  },
  backDownloadLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '80%',
  },
  backArrowIconStyle: {
    width: 14,
    height: 14,
    transform: [{ rotate: '180deg' }],
  },
  downloadIconStyle: {
    width: 18,
    height: 18,
  },
  certificateViewLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  certificateImageStyle: {
    width: 327,
    height: 230,
  },
});

export default EducationCertificateModal;
