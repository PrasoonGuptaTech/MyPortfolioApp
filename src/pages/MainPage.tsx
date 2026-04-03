import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header/Header';

function MainPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainPage;
