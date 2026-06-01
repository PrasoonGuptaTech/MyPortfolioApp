import { PortfolioColors } from '../../../constants/colors';
import { PortfolioExperience } from '../../../constants/experience';

export function isFirstCompany() {
  let experienceArrayLength = PortfolioExperience?.length;
  let requiredObjectIndex = PortfolioExperience[experienceArrayLength - 1];
  let requiredObject = PortfolioExperience.find(index => index === requiredObjectIndex);
  return requiredObject?.id;
}

export function backgroundColorOverlay(experienceItem: any) {
  if (experienceItem?.isCurrentCompany) {
    return PortfolioColors.buttercupYellow;
  } else if (experienceItem?.id === isFirstCompany()) {
    return PortfolioColors.brightOrange;
  } else {
    return PortfolioColors.paleGrey;
  }
}

export function timeDurationOverlay(experienceItem: any) {
  let finalTime = '';
  if (experienceItem?.isCurrentCompany === true) {
    finalTime = `${experienceItem?.jobStartingDate} - Present`;
  } else {
    finalTime = `${experienceItem?.jobStartingDate} - ${experienceItem?.jobEndingDate}`;
  }
  return finalTime;
}

export function isCompanyDetailEmpty(detail: any) {
  if (detail === '' || detail === null || detail === undefined) {
    return true;
  } else {
    return false;
  }
}
