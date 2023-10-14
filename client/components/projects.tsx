import '@/styles/projects.css';

import { ProjectList } from '@/components/projects/projectlist';

import { prisma } from '@/utils/prisma'

export default async function Projects() {

  const projects = await prisma.project.findMany({
    include: {
      image: true,
      links: true,
    },
  });

  return (
    <div id='projects' className='flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-950'>
      <p className='font-bold mt-20 text-4xl p-12'>Recent Projects</p>
      <div className='container w-full'>
        <ProjectList className='' data={projects} />
      </div>
    </div>
  )
}
