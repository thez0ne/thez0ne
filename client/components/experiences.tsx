'use client'

import '@/styles/timeline.css'

import { Timeline } from './timeline/timeline';

export default function Experiences() {

  const jobs = [
    {
      position: 'Software Developer',
      company: 'Genetec',
      date: 'June - Dec 2022',
      description: [
        'Adding new features to the camera drivers in order to communicate over HTTPS',
        'Enabling video streaming from a camera by implementing a modern communication protocol',
        'Writing system tests using Mocha in order to evaluate API endpoints for robustness',
      ],
      logo: {
        path: '/genetec.svg',
        alt: 'Genetec Logo',
        link: 'https://www.genetec.com/',
      },
    },
    {
      position: '3D Programmer',
      company: 'Ubisoft Montreal',
      date: 'May - Nov 2021',
      description: [
        'Writing custom Shader programs requested by artists’ to help them carry out their designs',
        'Adding features centered around 3D models to a graph‑based Shader tool to increase efficiency for users',
        'Integrating new graphical updates from other projects built on the same game engine',
      ],
      logo: {
        path: '/ubisoft.svg',
        alt: 'Ubisoft Montreal Logo',
        link: 'https://www.ubisoft.com/'
      },
    },
    {
      position: 'System Test Analyst',
      company: 'Genetec',
      date: 'Sept-Dec 2019',
      description: [
        'Developing and updating old scripts to automate the testing pipeline',
        'Testing the main software suite, and the interoperability between various video‑based plugins',
        'Performing a multitude of thorough and rigorous tests such as Regression Tests, Upgrade Tests, and Soak Tests ensuring overall quality and maintenance of standards',
      ],
      logo: {
        path: 'genetec.svg',
        alt: 'Genetec Logo',
        link: 'https://www.genetec.com/',
      },
    },

  ];

  return (
    <div id='experiences' className='flex flex-col items-center justify-center min-h-screen min-w-full'>
      <p className='font-bold mt-20 text-4xl p-12'>Experiences</p>
      <div className='container w-full'>
        <Timeline className='my-vertical-progress' data={jobs} />
      </div>
    </div>
  )
}


/* item format example
{
  position: 'Software Developer',
  company: 'Genetec',
  date: 'June - Dec 2022',
  description: [
    'Adding new features to the camera drivers in order to communicate over HTTPS',
    'Enabling video streaming from a camera by implementing a modern communication protocol',
    'Writing system tests using Mocha in order to evaluate API endpoints for robustness',
  ],
  logo: {
    path: '/genetec.svg',
    alt: 'Genetec Logo',
    link: 'https://www.genetec.com/',
  },
},
*/
