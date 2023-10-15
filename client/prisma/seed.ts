import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const project1 = await prisma.project.upsert({
    where: { title: 'Test Project' },
    update: {},
    create: {
      title: "Test Project",
      projecttype: "Test Type",
      image: {
        create: {
          src: '/feygo1.webm',
          alt: 'alt text1',
        }
      }
      ,
      technologies: ["tech1", 'tech2'],
      links: {
        create: [
          {
            name: "link1",
            url: "https://www.youtube.com",
          },
          {
            name: "link2",
            url: "https://www.youtube.com",
          },
        ],
      },
      description: ['desc1', 'desc2'],
    },
  });
  const project2 = await prisma.project.upsert({
    where: { title: 'Test Project2' },
    update: {},
    create: {
      title: "Test Project2",
      projecttype: "Test Type",
      image: {
        create: {
          src: '/feygo2.webm',
          alt: 'alt text2',
        }
      }
      ,
      technologies: ["tech3", 'tech4'],
      links: {
        create: [
          {
            name: "link1",
            url: "https://www.youtube.com",
          },
          {
            name: "link2",
            url: "https://www.youtube.com",
          },
        ],
      },
      description: ['desc3', 'desc4'],
    },
  });
  console.log({ project1 });
  console.log({ project2 });

  const experience1 = await prisma.experience.upsert({
    where: { name: 'Test Position' },
    update: {},
    create: {
      name: "Test Position",
      position: "Test Position",
      company: "Company1",
      date: "June - Dec 2022",
      description: ['desc1', 'desc2'],
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
    where: { name: 'Test Position2' },
    update: {},
    create: {
      name: "Test Position2",
      position: "Test Position2",
      company: "Company2",
      date: "June - Dec 2023",
      description: ['desc3', 'desc4'],
      logo: {
        create: {
          path: '/genetec.svg',
          alt: 'Genetec Logo',
          link: 'https://www.genetec.com/',
        }
      }
    },
  });

  console.log({ experience1 });
  console.log({ experience2 });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })