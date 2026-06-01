import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/PagesNavigation';

type ProfileNaviagtionProps = StackNavigationProp<RootStackParamList, 'Journey'>;

function ProfileJourney() {
  const navigation = useNavigation<ProfileNaviagtionProps>();
  const onJourneyNavigationHandler = () => navigation.navigate('Journey');
  return (
    <View style={styles.journeyContainer}>
      <View style={styles.journeyView}>
        <View style={styles.journeyTitleArrow}>
          <Text style={styles.journeyTitleText}>Profile Journey</Text>
          <Pressable onPress={onJourneyNavigationHandler}>
            <Image
              source={require('../../../assets/Images/RightWhiteArrowIcon.png')}
              style={styles.rightArrowIConView}
              alt="Right Arrow Icon"
            />
          </Pressable>
        </View>
        <Text style={styles.journeyDescription}>
          Starting as a mobile developer passionate about clean user experiences, I’ve spent years
          refining the balance between scalable architecture, performance, and intuitive design. I
          believe React Native applications should feel seamless, responsive, and thoughtfully
          crafted across every platform.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  journeyContainer: {
    alignSelf: 'center',
    marginVertical: 8,
  },
  journeyView: {
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 20,
    backgroundColor: PortfolioColors.brightOrange,
    marginHorizontal: 24,
  },
  journeyTitleArrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  rightArrowIConView: {
    width: 24,
    height: 24,
  },
  journeyTitleText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  journeyDescription: {
    fontWeight: 'medium',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 8,
    marginHorizontal: 16,
    paddingBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ProfileJourney;
