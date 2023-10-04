import Image from 'next/image';

// TODO get types fixed up
function TimelineItem({ data }: any) {
  return (
    <li className="timeline-item rounded-3xl shadow-xl">
      <a href={data.logo.link} target='_blank' rel='noopener noreferrer'>
        <div className="timeline-logo text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-slate-100">
          {data.logo && (
            <Image
              src={data.logo.path}
              alt={data.logo.alt}
              width={50}
              height={50}
            ></Image>
          )}
        </div>
      </a>

      <div className="timeline-item-information">
        <p className="timeline-information text-xl font-semibold my-2">{data.position}</p>

        <a href={data.logo.link} target='_blank' rel='noopener noreferrer'>
          <div className="timeline-information  space-x-2 text-gray-400 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p>{data.company}</p>
          </div>
        </a>

        <div className="timeline-information flex space-x-2 text-gray-400 text-sm my-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time className='timeline-date'>{data.date}</time>
        </div>

        <div className="border-t-2"></div>

        <div className="flex justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Job Description</p>
            <div className="flex flex-col">
              {data.description.map((element: string, index: number) => (
                <p key={index}>• {element}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export { TimelineItem };
