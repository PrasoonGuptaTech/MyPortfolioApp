import { PortfolioProjects } from '../../../constants/projects';

function AllProjectSkills() {
  let allProjects: any = [];
  PortfolioProjects.forEach(techStack =>
    techStack?.projectTechStack?.forEach(skills => allProjects.push(skills)),
  );
  if (allProjects?.length > 0) {
    return allProjects;
  }
}

export function UniqueSkills() {
  const totalProjects = AllProjectSkills();
  let uniqueProjects: any = [];
  uniqueProjects = [...new Set(totalProjects)];
  return uniqueProjects;
}
