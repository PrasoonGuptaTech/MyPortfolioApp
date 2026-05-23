import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PortfolioProjects } from '../../../../constants/projects';
import Card from '../Card/Card';

function HomeProjectsCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef<FlatList<string>>(null);
  const nonActiveProjects = PortfolioProjects.filter(proj => proj?.isActivilyWorking !== true);
  useEffect(() => {
    const cardInterval = setInterval(() => {
      const nextIndex = currentIndex === nonActiveProjects.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatlistRef?.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 2000);
    return () => clearInterval(cardInterval);
  }, [currentIndex, nonActiveProjects.length]);
  const projectCardRenderItem = ({ item }: { item: any }) => {
    return <Card projectItem={item} />;
  };
  return (
    <View style={styles.projectsContainerView}>
      <FlatList
        data={nonActiveProjects}
        keyExtractor={(item: any) => item?.id}
        renderItem={projectCardRenderItem}
        horizontal={true}
        ref={flatlistRef}
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
