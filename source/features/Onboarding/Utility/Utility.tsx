import { PortfolioProjects } from '../../../constants/projects';

function AllSkills() {
  let allSkills: any = [];
  PortfolioProjects.map(projectItem =>
    projectItem?.projectTechStack?.map(projectSkills => allSkills.push(projectSkills)),
  );
  PortfolioProjects.map(projectItem =>
    projectItem?.otherTechStack?.map(otherSkills => allSkills.push(otherSkills)),
  );
  PortfolioProjects.map(projectItem =>
    projectItem?.productionSupportTechStack?.map(productionSkills =>
      allSkills.push(productionSkills),
    ),
  );
  return allSkills;
}

export function AllUniqueSkills() {
  const allSkills: any = AllSkills();
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
