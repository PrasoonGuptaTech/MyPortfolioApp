import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header/Header';
import Summary from '../Components/Summary/Summary';
import Skills from '../Components/Skills/Skills';
import WorkExperience from '../Components/WorkExperience/WorkExperience';
import Projects from '../Components/Projects/Projects';

function MainPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Summary />
        <Skills />
        <WorkExperience />
        <Projects />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainPage;
