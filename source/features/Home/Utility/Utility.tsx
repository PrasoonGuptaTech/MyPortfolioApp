import { PortfolioProjects } from '../../../constants/projects';

function ProjectStackMapping() {
  let AllProjects: any = [];
  PortfolioProjects.forEach(techStack =>
    techStack?.projectTechStack?.forEach(skills => AllProjects.push(skills)),
  );
  if (AllProjects?.length > 0) {
    return AllProjects;
  }
}

export function UniqueProjects() {
  const totalProjects = ProjectStackMapping();
  let uniqueProjects: any = [];
  uniqueProjects = [...new Set(totalProjects)];
  return uniqueProjects;
}
