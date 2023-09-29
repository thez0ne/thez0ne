import { ProjectItem } from "./projectitem";

function ProjectList(props: any) {
  const { className, data } = props;

  return (
    <div className={className}>
      <ul className='project-list'>
        {data.map((data: any, index: number) => (
          <ProjectItem data={data} key={index} />
        ))}
      </ul>
    </div>
  );
}

export { ProjectList };