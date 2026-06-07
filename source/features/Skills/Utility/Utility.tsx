import { PortfolioProjects } from '../../../constants/projects';

function TechnicalSkills() {
  let allSkills: any = [];
  PortfolioProjects.forEach(projectItem =>
    projectItem?.projectTechStack?.map(projectSkills => allSkills.push(projectSkills)),
  );
  return allSkills;
}

export function AllUniqueTechnicalSkills() {
  const allSkills: any = TechnicalSkills();
  let allUniqueSkills: any = [];
  if (allSkills?.length > 0) {
    allUniqueSkills = [
      ...new Map(
        allSkills?.map((skill: any) => [
          skill?.projectTitle,
          {
            ...skill,
            projectId: `${skill?.projectTitle}-${Math.random().toString(36).substring(2, 9)}`,
          },
        ]),
      ).values(),
    ];
    return allUniqueSkills;
  }
}
