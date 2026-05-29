import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function WorkflowCard(props: any) {
  const { cardNumber, cardTitle, cardDesc } = props;
  return (
    <View style={styles.workflowCardContainer}>
      <View style={styles.numberView}>
        <View style={styles.numberLayout}>
          <Text style={styles.numberText}>{cardNumber}</Text>
        </View>
      </View>
      <View style={styles.cardContentView}>
        <Text style={styles.contentTitleView}>{cardTitle}</Text>
        <Text style={styles.contentDescView}>{cardDesc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  workflowCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignSelf: 'flex-start',
  },
  numberView: {
    width: 32,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  numberLayout: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: PortfolioColors.brightOrange,
    backgroundColor: PortfolioColors.brightOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.purpleBlack,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  cardContentView: {
    width: 250,
    height: 54,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 8,
  },
  contentTitleView: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  contentDescView: {
    fontWeight: 'medium',
    fontSize: 14,
    letterSpacing: 0,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
  },
});

export default WorkflowCard;
