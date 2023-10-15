import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const project1 = await prisma.project.upsert({
    where: { title: 'Phoenix Engine' },
    update: {},
    create: {
      title: "Phoenix Engine",
      projecttype: "Computer Graphics Development",
      inprogress: true,
      image: {
        create: {
          src: '/phoenix.webm',
          alt: 'Rendering Demo from the Phoenix Engine',
        }
      },
      technologies: [
        'C++',
        'Vulkan',
        'OpenGL',
        'imgui',
      ],
      links: {
        create: [
          {
            name: 'GITHUB',
            url: 'https://github.com/thez0ne/Phoenix-Engine',
          },
          {
            name: 'DEMO',
            url: '',
          },
        ],
      },
      description: [
        'Developping a custom game engine from scratch tailored to my needs',
        'Writing Code that can handle multiple different rendering APIs depending on the target platform',
      ],
    },
  });
  const project2 = await prisma.project.upsert({
    where: { title: 'Project: FEYGO' },
    update: {},
    create: {
      title: "Project: FEYGO",
      projecttype: "Game Development",
      image: {
        create: {
          src: '/feygo.webm',
          alt: 'Gameplay of Project FEYGO',
        }
      },
      technologies: [
        'C#',
        'Unity',
        'Photon Multiplayer',
      ],
      links: {
        create: [
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
      },
      description: [
        'Developing a strategy card game inspired by Fire Emblem and Yu-Gi-Oh!',
        'Writing code that allows singleplayer and multiplayer gameplay within the same code base using the Photon Networking framework',
      ],
    },
  });
  const project3 = await prisma.project.upsert({
    where: { title: 'ChronoBreak' },
    update: {},
    create: {
      title: "ChronoBreak",
      projecttype: "Game Development",
      image: {
        create: {
          src: '/chronobreak.webm',
          alt: 'Gameplay of Chronobreak',
        }
      },
      technologies: [
        'C#',
        'Unity',
      ],
      links: {
        create: [
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
      },
      description: [
        'Developing a first person shooter game inspired by Titanfall 2 and Mirror\'s Edge with a focus on completing levels as fast as possible',
        'Writing a detailed software architecture document with various criteria such as level design, planned timeline, and budget',
      ],
    },
  });

  const experience1 = await prisma.experience.upsert({
    where: { name: 'GenetecFullTime' },
    update: {},
    create: {
      name: "GenetecFullTime",
      position: "Software Developer",
      company: "Genetec",
      date: "June - Dec 2022",
      description: [
        'Adding new features to the camera drivers in order to communicate over HTTPS',
        'Enabling video streaming from a camera by implementing a modern communication protocol',
        'Writing system tests using Mocha in order to evaluate API endpoints for robustness',
      ],
      logo: {
        create: {
          path: '/genetec.svg',
          alt: 'Genetec Logo',
          link: 'https://www.genetec.com/',
        }
      }
    },
  });
  const experience2 = await prisma.experience.upsert({
    where: { name: 'UbisoftInternship' },
    update: {},
    create: {
      name: "UbisoftInternship",
      position: "3D Programmer",
      company: "Ubisoft Montreal",
      date: "May - Nov 2021",
      description: [
        'Writing custom Shader programs requested by artists’ to help them carry out their designs',
        'Adding features centered around 3D models to a graph‑based Shader tool to increase efficiency for users',
        'Integrating new graphical updates from other projects built on the same game engine',
      ],
      logo: {
        create: {
          path: '/ubisoft.svg',
          alt: 'Ubisoft Montreal Logo',
          link: 'https://www.ubisoft.com/'
        }
      }
    },
  });
  const experience3 = await prisma.experience.upsert({
    where: { name: 'GenetecInternship' },
    update: {},
    create: {
      name: "GenetecInternship",
      position: "System Test Analyst",
      company: "Genetec",
      date: "Sept-Dec 2019",
      description: [
        'Developing and updating old scripts to automate the testing pipeline',
        'Testing the main software suite, and the interoperability between various video‑based plugins',
        'Performing a multitude of thorough and rigorous tests such as Regression Tests, Upgrade Tests, and Soak Tests ensuring overall quality and maintenance of standards',
      ],
      logo: {
        create: {
          path: 'genetec.svg',
        alt: 'Genetec Logo',
        link: 'https://www.genetec.com/',
        }
      }
    },
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })