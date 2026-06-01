import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import JourneyTimelineCard from './JourneyTimelineCard';
import { PortfolioExperience } from '../../../constants/experience';

function JourneyTimeline() {
  const experienceRenderItem = ({ item }: { item: any }) => {
    return <JourneyTimelineCard experienceItem={item} />;
  };
  return (
    <View style={styles.timelineContainer}>
      <FlatList
        data={PortfolioExperience}
        keyExtractor={(item: any) => item?.id}
        renderItem={experienceRenderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timelineContainer: {
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default JourneyTimeline;
