import React from 'react';
import { StyleSheet, View } from 'react-native';
import JourneyTimelineView from './JourneyTimelineVIew';
import JourneyTimelineCardView from './JourneyTimelineCardView';

function JourneyTimelineCard(props: any) {
  const { experienceItem } = props;

  return (
    <View style={styles.timelineCardContainer}>
      <JourneyTimelineView experienceItem={experienceItem} />
      <JourneyTimelineCardView experienceItem={experienceItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  timelineCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
});

export default JourneyTimelineCard;
