import '@/styles/about.css';

export default function About() {
  return (
    <div id="about" className='text-xl flex flex-col text-center items-center justify-center min-h-screen min-w-full bg-gray-950'>
      <span className="text-4xl overflow-y-hidden font-medium">
        Hello!
      </span>
      <p className="">
        My Name is Anik Patel.
      </p>
      <p className="mb-2">
        I am a software developer based in Montreal Québec.
      </p>
      <p className="my-4">
        I am interested in <span className="interests">back-end development</span>, <span className="interests">computer graphics</span>, and <span className="interests">game development.</span>
      </p>
      <p className="my-4">
        On this page you will find recently completed projects and my professional experiences.
      </p>
    </div>
  )
}
