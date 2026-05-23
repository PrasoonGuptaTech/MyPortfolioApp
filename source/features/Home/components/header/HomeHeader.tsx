import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';
import HomeProfile from './HomeProfile';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/PagesNavigation';

const { width } = Dimensions.get('window');

type HomeProfileNavigationProps = StackNavigationProp<RootStackParamList, 'Profile'>;

function HomeHeader() {
  const navigation = useNavigation<HomeProfileNavigationProps>();
  const onProfileNavigationHandler = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.headerContainer}>
      <HomeProfile />
      <Pressable onPress={onProfileNavigationHandler}>
        <Image
          source={require('../../../../assets/Images/RightArrowIcon.png')}
          alt="Right Arrow Icon"
          style={styles.rightArrowIconImageView}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    height: 84,
    borderBottomWidth: 2,
    borderColor: PortfolioColors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  rightArrowIconImageView: {
    width: 20,
    height: 20,
  },
});

export default HomeHeader;
