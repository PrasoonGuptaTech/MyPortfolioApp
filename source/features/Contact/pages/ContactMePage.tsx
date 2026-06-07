import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactHeader from '../components/ContactHeader';
import { ScrollView } from 'react-native';
import ContactHiringTitle from '../components/ContactHiringTitle';
import ContactTitle from '../components/ContactTitle';

function ContactMePage() {
  return (
    <SafeAreaView>
      <ContactHeader />
      <ScrollView>
        <ContactHiringTitle />
        <ContactTitle />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ContactMePage;
