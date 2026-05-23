import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

function ProfileHeader() {
  const navigation = useNavigation();
  const onBackPressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.profileHeaderView}>
      <Pressable style={styles.backArrowIconView} onPress={onBackPressHandler}>
        <Image
          source={require('../../../../assets/Images/RightArrowIcon.png')}
          style={styles.arrowIconStyle}
        />
      </Pressable>
      <Text style={styles.headerTitleStyle}>My Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileHeaderView: {
    width: width,
    height: 74,
    borderBottomWidth: 4,
    borderColor: PortfolioColors.black,
    padding: 16,
    flexDirection: 'row',
  },
  backArrowIconView: {
    justifyContent: 'center',
  },
  arrowIconStyle: {
    width: 20,
    height: 20,
    transform: [{ rotate: '180deg' }],
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
    marginHorizontal: 16,
  },
});

export default ProfileHeader;
