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
  uniqueProjects = [
    ...new Map(
      totalProjects?.map((skill: any) => [
        skill?.projectTitle,
        {
          ...skill,
          projectTechSkillID: `${skill?.projectTitle}-${Math.random().toString(36).substring(2, 9)}`,
        },
      ]),
    ).values(),
  ];
  return uniqueProjects;
}
