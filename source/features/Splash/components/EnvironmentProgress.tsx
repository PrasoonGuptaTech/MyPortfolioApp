import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function EnvironmentProgress() {
  const [progressTime, setProgressTime] = useState<number>(0);
  const environmentText = useRef('');
  const styles = EnvironmentProgressStyles(progressTime);
  useEffect(() => {
    if (progressTime >= 100) {
      return;
    }
    if (progressTime % 30 === 0) {
      environmentText.current = environmentText.current + '.';
    }
    const progressTimeOut = setInterval(() => {
      setProgressTime(prev => prev + 10);
    }, 1000);
    return () => clearInterval(progressTimeOut);
  }, [progressTime]);
  return (
    <View style={styles.environmentProgressContainer}>
      <View style={styles.progressBarView}>
        <View style={styles.progressingBarView} />
      </View>
      <View style={styles.progressingNumberView}>
        <Text style={styles.initializingEnvironmentText}>
          Initailizing Environment{environmentText?.current}
        </Text>
        <Text style={styles.progressPercentageText}>{progressTime}%</Text>
      </View>
    </View>
  );
}

const EnvironmentProgressStyles = (progressTime: number) =>
  StyleSheet.create({
    environmentProgressContainer: {
      marginTop: 16,
    },
    progressBarView: {
      width: 310,
      height: 16,
      borderWidth: 1,
      borderRadius: 16,
      marginVertical: 8,
      backgroundColor: '#E3E2DF',
      justifyContent: 'center',
    },
    progressingNumberView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    initializingEnvironmentText: {
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: 0.65,
      color: PortfolioColors.darkGrey,
      fontStyle: 'normal',
      textAlign: 'center',
    },
    progressPercentageText: {
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 0.65,
      color: PortfolioColors.grey900,
      fontStyle: 'normal',
      textAlign: 'center',
    },
    progressingBarView: {
      width: `${progressTime * 0.97}%`,
      height: 6,
      borderWidth: 1,
      borderColor: PortfolioColors.black,
      backgroundColor: PortfolioColors.black,
      borderRadius: 16,
      marginHorizontal: 5,
    },
  });

export default EnvironmentProgress;
