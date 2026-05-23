import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PortfolioProjects } from '../../../../constants/projects';
import Card from '../Card/Card';

function HomeProjectsCard() {
  const projectCardRenderItem = ({ item }: { item: any }) => {
    return <Card projectItem={item} />;
  };
  return (
    <View style={styles.projectsContainerView}>
      <FlatList
        data={PortfolioProjects}
        keyExtractor={(item: any) => item?.id}
        renderItem={projectCardRenderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  projectsContainerView: {
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default HomeProjectsCard;
