import React from 'react';
import { FlatList, Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';
import { AllUniqueOtherSkills, isEmpty } from '../Utility/Utility';

function SkillsTools() {
  const otherSkills = AllUniqueOtherSkills();
  const otherSkillsRenderItem = ({ item }: { item: any }) => {
    const onToolsPressHandler = () =>
      !isEmpty(item?.projectLink) && Linking.openURL(item?.projectLink);
    return (
      <Pressable style={[styles.toolsContainerUI]} onPress={onToolsPressHandler}>
        <View
          style={[styles.toolsIconLayout, { backgroundColor: item?.projectTitleBackgroundColor }]}
        >
          <Image
            source={item?.projectTitleLogo}
            alt={`${item?.projectTitle}`}
            style={{ width: item?.projectIconWidth, height: item?.projectIconHeight }}
          />
        </View>
        <Text style={styles.titleText}>{item?.projectTitle}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.toolsContainer}>
      <View style={styles.toolsLayoutUI}>
        <View style={styles.titleUI}>
          <Image
            source={require('../../../assets/Images/TechnicalSkillsActiveIcon.png')}
            alt="Tools Logo"
            style={styles.toolLogo}
          />
          <Text style={styles.toolText}>Tools</Text>
        </View>
        <FlatList
          data={otherSkills}
          keyExtractor={(item: any) => item?.projectId}
          renderItem={otherSkillsRenderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatlistUI}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toolsContainer: {
    marginTop: 8,
    justifyContent: 'flex-start',
  },
  toolsLayoutUI: {
    marginHorizontal: 16,
    padding: 8,
  },
  titleUI: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolLogo: {
    width: 19,
    height: 18,
  },
  toolText: {
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
    marginLeft: 16,
  },
  flatlistUI: {
    marginTop: 8,
  },
  toolsContainerUI: {
    marginHorizontal: 8,
    marginVertical: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolsIconLayout: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleText: {
    fontWeight: 'semibold',
    fontSize: 18,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default SkillsTools;
