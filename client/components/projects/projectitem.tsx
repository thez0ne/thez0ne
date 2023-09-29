function ProjectItem({ data }: any) {
  return (
    <li className="project-item rounded-3xl shadow-xl my-5 w-full">

      {/* <div className="rounded-md shadow-lg"> */}
      <div className="md:flex leading-none w-full">
        <div className="project-image flex-none md:shrink-0">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="object-cover h-48 w-full md:h-full md:w-96 shadow-2xl"
          />
        </div>

        <div className="text-center flex flex-col text-gray-300 w-full">

          <p className=" pt-4 text-2xl font-bold">{data.title}</p>
          <hr className="hr-text" data-content="" />
          <div className="text-md flex justify-between h-auto px-4 my-2">
            <span className="overflow-y-hidden font-bold">{data.projecttype}</span>
            <span className="overflow-y-hidden font-bold">Technologies used: {data.technologies.join(', ')}</span>
          </div>

          {/* TODO FIGURE OUT WHY THIS HAVE SCROLL */}
          {data.description.map((element: string, index: number) => (
            <p className="overflow-y-hidden md:block px-4 my-4 text-justify" key={index}>• {element}</p>
          ))}

          <hr className="hr-text" data-content="" />
          <div className="flex justify-center text-sm">
            {data.links.map((element: any, index: number) => (
              element.url && (

                <a
                  href={element.url}
                  className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  key={index}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {element.name}
                </a>
              )
            ))}
          </div>

        </div>
      </div>
      {/* </div> */}
    </li>
  );
}

export { ProjectItem };
