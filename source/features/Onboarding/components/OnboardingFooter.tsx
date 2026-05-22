import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/PagesNavigation';
import { useNavigation } from '@react-navigation/native';

type OnboardingNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

const {width} = Dimensions.get('window');

function OnboardingFooter() {
  const navigation = useNavigation<OnboardingNavigationProps>();
  const onFooterNavigationHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.footerContainer}>
      <Pressable style={styles.footerCTA} onPress={onFooterNavigationHandler}>
        <Text style={styles.footerTextStyle}>ENTER PORTFOLIO</Text>
        <Image
          source={require('../../../assets/Images/RightArrowIcon.png')}
          style={styles.arrowStyle}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerCTA: {
    width: width * 0.726,
    height: 50,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 32,
    backgroundColor: PortfolioColors.buttercupYellow,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerTextStyle: {
    fontWeight: '900',
    fontSize: 14,
    letterSpacing: 0.8,
    fontStyle: 'normal',
    textAlign: 'center',
    color: PortfolioColors.black,
  },
  arrowStyle: {
    width: 16,
    height: 16,
    marginHorizontal: 8,
  },
});

export default OnboardingFooter;
