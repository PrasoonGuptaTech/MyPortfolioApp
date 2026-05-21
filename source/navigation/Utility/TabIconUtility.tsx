import TabBarIcons from '../components/TabBarIcons';

export const HomeTabIcon = ({ focused }: { focused: any }) => {
  return <TabBarIcons focused={focused} route="Home" />;
};

export const ProjectsTabIcon = ({ focused }: { focused: any }) => {
  return <TabBarIcons focused={focused} route="Projects" />;
};

export const EducationCertsTabIcon = ({ focused }: { focused: any }) => {
  return <TabBarIcons focused={focused} route="EducationCerts" />;
};

export const TechnicalSkillsTabIcon = ({ focused }: { focused: any }) => {
  return <TabBarIcons focused={focused} route="TechnicalSkills" />;
};

export const ContactMeTabIcon = ({ focused }: { focused: any }) => {
  return <TabBarIcons focused={focused} route="ContactMe" />;
};
