import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '../components/ProfileHeader';
import ProfileHero from '../components/ProfileHero';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileJourney from '../components/ProfileJourney';

function ProfilePage() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ProfileHeader />
      <ScrollView>
        <ProfileHero />
        <ProfileJourney />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    marginBottom: 64,
  },
});

export default ProfilePage;
