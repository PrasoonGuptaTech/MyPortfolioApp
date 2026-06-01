import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import JourneyHeader from '../components/JourneyHeader';
import { ScrollView, StyleSheet } from 'react-native';
import JourneyTitle from '../components/JourneyTitle';
import JourneyTimeline from '../components/JourneyTimeline';

function JourneyPage() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <JourneyHeader />
      <ScrollView nestedScrollEnabled={true}>
        <JourneyTitle />
        <JourneyTimeline />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    marginBottom: 64,
  },
});

export default JourneyPage;
