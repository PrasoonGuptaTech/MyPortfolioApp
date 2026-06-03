import React from 'react';
import { Image, Modal, Pressable, StyleSheet, View } from 'react-native';

function EducationCertificateModal(props: any) {
  const { isCertificateModalOpen, setIsCertificateModalOpen } = props;
  const onBackHandler = () => setIsCertificateModalOpen(false);
  return (
    <View style={styles.modalContainer}>
      <Modal transparent={true} visible={isCertificateModalOpen} statusBarTranslucent={true}>
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
              <Pressable>
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
