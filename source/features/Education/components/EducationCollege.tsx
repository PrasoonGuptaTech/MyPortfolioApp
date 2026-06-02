import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../constants/colors';

function EducationCollege() {
  return (
    <View style={styles.collegeContainer}>
      <View style={styles.collegeSectionCard}>
        <View style={styles.collegeNameLayout}>
          <Text style={styles.collegeNameText} numberOfLines={2}>
            Maharshi Dayanand University
          </Text>
          <Image
            source={require('../../../assets/Images/CollegeDegreeIcon.png')}
            alt="College Degree Icon"
            style={styles.degreeIcon}
          />
        </View>
        <View style={styles.specilaizationLayout}>
          <Text style={styles.specilizationText} numberOfLines={2}>
            B.Tech in Electronics and Communication Branch
          </Text>
        </View>
        <View style={styles.gradeContainer}>
          <View style={styles.gradeLayout}>
            <Text style={styles.gradeText}>Percentage 74%</Text>
          </View>
          <View style={styles.gradeLayout}>
            <Text style={styles.gradeText}>Dean's List</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  collegeContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 24,
  },
  collegeSectionCard: {
    padding: 8,
    maxWidth: 350,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.brightOrange,
    borderRadius: 24,
  },
  collegeNameLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  collegeNameText: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'left',
    width: '75%',
  },
  degreeIcon: {
    width: 33,
    height: 27,
  },
  specilaizationLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  specilizationText: {
    fontWeight: 'regular',
    fontSize: 16,
    letterSpacing: 0,
    color: PortfolioColors.white,
    fontStyle: 'normal',
    textAlign: 'left',
    width: '95%',
  },
  gradeContainer: {
    margin: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gradeLayout: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    backgroundColor: PortfolioColors.seaShellWhite,
    borderRadius: 24,
  },
  gradeText: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.65,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'left',
  },
});

export default EducationCollege;
