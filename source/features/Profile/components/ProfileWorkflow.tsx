import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';
import WorkflowCard from './WorkflowCard';

function ProfileWorkflow() {
  return (
    <View style={styles.profileWorkflowContainer}>
      <Text style={styles.workflowTitle}>Workflow</Text>
      <WorkflowCard
        cardNumber={1}
        cardTitle={'Design & Plan'}
        cardDesc={'Design and Create wireframes of App'}
      />
      <WorkflowCard
        cardNumber={2}
        cardTitle={'Build & Integrate'}
        cardDesc={'Develop and Testing of App'}
      />
      <WorkflowCard
        cardNumber={3}
        cardTitle={'Test & Deploy'}
        cardDesc={'Monitoring, Testing and Deployment of App'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileWorkflowContainer: {
    alignSelf: 'center',
    width: 350,
    height: 316,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 20,
    backgroundColor: PortfolioColors.white,
    padding: 24,
    marginVertical: 8,
  },
  workflowTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'left',
    marginBottom: 16,
  },
});

export default ProfileWorkflow;
