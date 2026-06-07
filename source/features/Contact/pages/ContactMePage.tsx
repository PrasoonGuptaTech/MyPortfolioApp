import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactHeader from '../components/ContactHeader';
import { ScrollView, StyleSheet } from 'react-native';
import ContactHiringTitle from '../components/ContactHiringTitle';
import ContactTitle from '../components/ContactTitle';
import ContactCVEmail from '../components/ContactCVEmail';
import ContactSocialMedia from '../components/ContactSocialMedia';

function ContactMePage() {
  return (
    <SafeAreaView style={styles.container}>
      <ContactHeader />
      <ScrollView>
        <ContactHiringTitle />
        <ContactTitle />
        <ContactCVEmail />
        <ContactSocialMedia />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactMePage;
