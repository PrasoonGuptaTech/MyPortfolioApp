import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header/Header';
import Summary from '../Components/Summary/Summary';
import Skills from '../Components/Skills/Skills';
import WorkExperience from '../Components/WorkExperience/WorkExperience';
import Projects from '../Components/Projects/Projects';
import Education from '../Components/Education/Education';

function MainPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Summary />
        <Skills />
        <WorkExperience />
        <Projects />
        <Education />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainPage;
