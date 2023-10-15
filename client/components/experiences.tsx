import '@/styles/timeline.css'

import { Timeline } from './timeline/timeline';

import { prisma } from '@/utils/prisma'

export default async function Experiences() {

  const experiences = await prisma.experience.findMany({
    include: {
      logo: true,
    },
  });

  return (
    <div id='experiences' className='flex flex-col items-center justify-center min-h-screen min-w-full'>
      <p className='font-bold mt-20 text-4xl p-12'>Experiences</p>
      <div className='container w-full'>
        <Timeline className='my-vertical-progress' data={experiences} />
      </div>
    </div>
  )
}
