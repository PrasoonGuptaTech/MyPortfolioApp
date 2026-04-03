import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header/Header';
import Summary from '../Components/Summary/Summary';

function MainPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Summary />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainPage;
