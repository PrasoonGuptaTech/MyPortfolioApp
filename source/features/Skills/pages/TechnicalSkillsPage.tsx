import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkillsHeader from '../components/SkillsHeader';
import { ScrollView } from 'react-native';
import SkillsHero from '../components/SkillsHero';
import SkillsFrontend from '../components/SkillsFrontend';

function TechnicalSkillsPage() {
  return (
    <SafeAreaView>
      <SkillsHeader />
      <ScrollView>
        <SkillsHero />
        <SkillsFrontend />
      </ScrollView>
    </SafeAreaView>
  );
}

export default TechnicalSkillsPage;
