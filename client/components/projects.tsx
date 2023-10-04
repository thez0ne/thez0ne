'use client'

import '@/styles/projects.css';

import { ProjectList } from '@/components/projects/projectlist';

export default function Projects() {

  const projects = [
    {
      title: 'Phoenix Engine',
      projecttype: 'Computer Graphics Development',
      inprogress: true,
      image: {
        src: '/phoenix.webm',
        alt: 'Rendering Demo from the Phoenix Engine',
      },
      technologies: [
        'C++',
        'Vulkan',
        'OpenGL',
        'imgui',
      ],
      links: [
        {
          name: 'GITHUB',
          url: 'https://github.com/neoJINXD/MilleniumArts',
        },
        {
          name: 'DEMO',
          url: '',
        },
      ],
      description: [
        'Developping a custom game engine from scratch tailored to my needs',
        'Writing Code that can handle multiple different rendering APIs depending on the target platform',
      ],
    },
    {
      title: 'Project: FEYGO',
      projecttype: 'Game Development',
      image: {
        src: '/feygo.webm',
        alt: 'Gameplay of Project FEYGO',
      },
      technologies: [
        'C#',
        'Unity',
        'Photon Multiplayer',
      ],
      links: [
        {
          name: 'PLAY GAME',
          url: 'https://the-z0ne.itch.io/feygo',
        },
        {
          name: 'GITHUB',
          url: 'https://github.com/neoJINXD/MilleniumArts',
        },
        {
          name: 'DEMO',
          url: 'https://www.youtube.com/watch?v=MupYGVeqsmI',
        },
      ],
      description: [
        'Developing a strategy card game inspired by Fire Emblem and Yu-Gi-Oh!',
        'Writing code that allows singleplayer and multiplayer gameplay within the same code base using the Photon Networking framework',
      ],
    },
    {
      title: 'ChronoBreak',
      projecttype: 'Game Development',
      image: {
        src: '/chronobreak.webm',
        alt: 'Gameplay of Chronobreak',
      },
      technologies: [
        'C#',
        'Unity',
      ],
      links: [
        {
          name: 'PLAY GAME',
          url: 'https://the-z0ne.itch.io/chronobreak',
        },
        {
          name: 'GITHUB',
          url: 'https://github.com/neoJINXD/ChronoBreak',
        },
        {
          name: 'DEMO',
          url: 'https://youtu.be/qZTiCXCTo20',
        },
      ],
      description: [
        'Developing a first person shooter game inspired by Titanfall 2 and Mirror\'s Edge with a focus on completing levels as fast as possible',
        'Writing a detailed software architecture document with various criteria such as level design, planned timeline, and budget',
      ],
    },
  ];

  return (
    <div id="projects" className='flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-950'>
      <p className="font-bold mt-20 text-4xl p-12">Recent Projects</p>
      <div className="container w-full">
        <ProjectList className='' data={projects} />
      </div>
    </div>
  )
}


/* example of project entry
{
      title: 'Pheoeix Engine',
      projecttype: 'Computer Graphics Development',
      inprogress: true,
      image: {
        src: '/phoenix.gif',
        alt: 'Rendering Demo from the Phoenix Engine',
      },
      technologies: [
        'C++',
        'Vulkan',
      ],
      links: [
        {
          name: 'GITHUB',
          url: 'https://github.com/neoJINXD/MilleniumArts',
        },
        {
          name: 'DEMO',
          url: '',        // -> if empty, will not render a button
        },
      ],
      description: [
        'Developing a strategy card game inspired by Fire Emblem and Yu‑Gi‑Oh!',
        'Writing code that allows singleplayer and multiplayer gameplay within the same code base using the Photon Networking framework',
      ],
    },

*/