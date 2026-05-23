import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PortfolioColors } from '../../../../constants/colors';

function Card(props: any) {
  const { projectItem } = props;
  return (
    <>
      {projectItem?.isActivilyWorking ? null : (
        <View style={styles.cardContainer}>
          <View>
            <Image
              source={projectItem?.projectImage}
              alt={projectItem?.projectName}
              style={styles.cardImageView}
            />
          </View>
          <View style={styles.cardContentView}>
            <Text style={styles.cardTitleView}>{projectItem?.projectName}</Text>
            <Text style={styles.cardTimingView}>{projectItem?.projectTiming}</Text>
            <View style={styles.tagOuterView}>
              {projectItem?.projectTags?.map((tag: any) => (
                <View key={tag} style={styles.tagView}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.cardDescView}>{projectItem?.projectShortDescription}</Text>
            <View style={styles.ctaView}>
              <Text style={styles.ctaText}>View Project</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    minHeight: 488,
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 20,
    marginVertical: 8,
    marginRight: 16,
    backgroundColor: PortfolioColors.seaShellWhite,
  },
  cardImageView: {
    width: 348,
    height: 163.13,
    borderRadius: 20,
  },
  cardContentView: {
    padding: 20,
  },
  cardTitleView: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 0,
    color: PortfolioColors.nightRider,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  cardTimingView: {
    fontWeight: 'semibold',
    fontSize: 14,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 12,
  },
  tagOuterView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  tagView: {
    borderWidth: 1,
    borderColor: PortfolioColors.black,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PortfolioColors.seaShellWhite,
    marginRight: 4,
    marginTop: 4,
  },
  tagText: {
    padding: 4,
    fontWeight: 'regular',
    fontSize: 12,
    letterSpacing: 0,
    color: PortfolioColors.grey900,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  cardDescView: {
    fontWeight: 'regular',
    fontSize: 14,
    letterSpacing: 0,
    color: PortfolioColors.darkGrey,
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop: 8,
  },
  ctaView: {
    width: 118,
    height: 36,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: PortfolioColors.buttercupYellow,
    backgroundColor: PortfolioColors.buttercupYellow,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  ctaText: {
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0,
    color: PortfolioColors.black,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default Card;
