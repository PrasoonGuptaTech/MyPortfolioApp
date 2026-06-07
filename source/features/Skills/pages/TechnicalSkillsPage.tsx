import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkillsHeader from '../components/SkillsHeader';
import { ScrollView } from 'react-native';
import SkillsHero from '../components/SkillsHero';

function TechnicalSkillsPage() {
  return (
    <SafeAreaView>
      <SkillsHeader />
      <ScrollView>
        <SkillsHero />
      </ScrollView>
    </SafeAreaView>
  );
}

export default TechnicalSkillsPage;
