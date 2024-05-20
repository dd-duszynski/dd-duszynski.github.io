import strings from '@/assets/strings';
import { Project } from '@/components/project/project';

export default async function ProjectPage() {
  const project = strings.listOfProjects.find(
    (project) => project.title === 'PXL'
  );

  if (!project) return <div className='text-black'>Project not found</div>;
  return <Project project={project} />;
}
