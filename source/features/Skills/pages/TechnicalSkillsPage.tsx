import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkillsHeader from '../components/SkillsHeader';
import { ScrollView } from 'react-native';
import SkillsHero from '../components/SkillsHero';
import SkillsFrontend from '../components/SkillsFrontend';
import SkillsTools from '../components/SkillsTools';

function TechnicalSkillsPage() {
  return (
    <SafeAreaView>
      <SkillsHeader />
      <ScrollView>
        <SkillsHero />
        <SkillsFrontend />
        <SkillsTools />
      </ScrollView>
    </SafeAreaView>
  );
}

export default TechnicalSkillsPage;
