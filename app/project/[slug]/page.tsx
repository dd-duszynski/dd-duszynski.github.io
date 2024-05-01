import stringsEN from '@/assets/strings-en';
import { Project } from '@/components/project/project';

async function getData(slug: string) {
  return stringsEN.listOfProjects.find((project) => project.slug === slug);
}

export default async function ProjectPage({ params }: any) {
  const project = await getData(params.slug);

  if (!project) return <div className='text-black'>Project not found</div>;
  return <Project project={project} />;
}
