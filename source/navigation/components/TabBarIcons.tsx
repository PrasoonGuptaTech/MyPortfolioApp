import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { PortfolioTabIcons } from '../../constants/tabIcons';
import { RootTabParamList } from '../PagesNavigation';
import { PortfolioColors } from '../../constants/colors';

type TabBarIconProps = {
  focused: boolean;
  route: keyof RootTabParamList;
};

function TabBarIcons({ focused, route }: Readonly<TabBarIconProps>) {
  const icon = focused ? PortfolioTabIcons[route]?.active : PortfolioTabIcons[route]?.inActive;
  const TabStyles = styles(
    PortfolioTabIcons[route]?.iconWidth,
    PortfolioTabIcons[route]?.iconHeight,
    focused,
  );
  return (
    <View style={TabStyles.iconView}>
      {focused ? (
        <View style={TabStyles.focusedView}>
          <Image source={icon} style={TabStyles.iconImageStyle} />
        </View>
      ) : (
        <Image source={icon} style={TabStyles.iconImageStyle} />
      )}
    </View>
  );
}

const styles = (iconWidth: any, iconHeight: any, focused: any) =>
  StyleSheet.create({
    iconView: {
      top: focused ? 12 : 10,
    },
    iconImageStyle: {
      width: iconWidth,
      height: iconHeight,
    },
    focusedView: {
      width: 44,
      height: 44,
      borderWidth: 1,
      borderColor: PortfolioColors.black,
      borderRadius: 32,
      backgroundColor: PortfolioColors.buttercupYellow,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default TabBarIcons;
