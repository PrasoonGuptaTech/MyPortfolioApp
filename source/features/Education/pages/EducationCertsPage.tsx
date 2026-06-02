import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EducationHeader from '../components/EducationHeader';
import { ScrollView } from 'react-native';
import EducationEnjoy from '../components/EducationEnjoy';
import EducationCollege from '../components/EducationCollege';

function EducationCertsPage() {
  return (
    <SafeAreaView>
      <EducationHeader />
      <ScrollView>
        <EducationEnjoy />
        <EducationCollege />
      </ScrollView>
    </SafeAreaView>
  );
}

export default EducationCertsPage;
