import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { PortfolioEducationEnjoy } from '../../../constants/enjoyment';
import { PortfolioColors } from '../../../constants/colors';

function EducationEnjoy() {
  const enjoymentRenderItem = ({ item }: { item: any }) => {
    return <Image source={item?.enjoyImage} style={styles.enjoyImageView} />;
  };
  return (
    <View style={styles.enjoymentContainer}>
      <FlatList
        data={PortfolioEducationEnjoy}
        keyExtractor={(item: any) => item?.id}
        renderItem={enjoymentRenderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  enjoymentContainer: {
    width: 350,
    height: 192,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 24,
    backgroundColor: PortfolioColors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 16,
  },
  enjoyImageView: {
    width: 348,
    height: 190,
    borderRadius: 24,
  },
});

export default EducationEnjoy;
