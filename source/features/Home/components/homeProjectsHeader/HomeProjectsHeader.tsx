import React from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { RootTabParamList } from '../../../../navigation/PagesNavigation';

type ProjectNavigationHandler = BottomTabNavigationProp<RootTabParamList, 'Projects'>;

function HomeProjectsHeader() {
  const navigation = useNavigation<ProjectNavigationHandler>();
  const onProjectHandler = () => {
    navigation.navigate('Projects');
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.projectHeaderView}>
        <Image
          source={require('../../../../assets/Images/ProjectsBrushIcon.png')}
          alt="Latest Work"
          style={styles.brushIconView}
        />
        <Text style={styles.headerTitle}>Latest Work</Text>
      </View>
      <Pressable style={styles.ctaView} onPress={onProjectHandler}>
        <Text style={styles.ctaTitle}>View More</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projectHeaderView: {
    flexDirection: 'row',
  },
  brushIconView: {
    width: 19,
    height: 18,
    marginTop: Platform.OS === 'android' ? 8 : 4,
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'left',
    marginHorizontal: 4,
  },
  ctaView: {
    width: 104,
    height: 29,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: PortfolioColors.buttercupYellow,
    backgroundColor: PortfolioColors.buttercupYellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaTitle: {
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: 0.65,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default HomeProjectsHeader;
