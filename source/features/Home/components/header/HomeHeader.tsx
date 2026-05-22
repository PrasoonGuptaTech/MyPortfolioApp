import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';
import HomeProfile from './HomeProfile';

const { width } = Dimensions.get('window');

function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <HomeProfile />
      <Pressable>
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
