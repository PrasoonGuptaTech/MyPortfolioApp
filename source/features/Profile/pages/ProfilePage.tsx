import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '../components/profileHeader/ProfileHeader';

function ProfilePage() {
  return (
    <SafeAreaView>
      <ProfileHeader />
    </SafeAreaView>
  );
}

export default ProfilePage;
