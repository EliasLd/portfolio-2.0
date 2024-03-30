import projects from '../data/projects.json';
import ProjectsDetails from './ProjectsDetails';

export default function Projects() {
  return (
    <div className='flex flex-col justify-center items-center mt-2'>
      <div className='mb-16'>
        <p className='font-sans font-bold text-white text-2xl'>Projects</p>
      </div>
        <div className='grid grid-cols-2 p-4 gap-5 bg-sky-800 rounded-xl'>
            {projects.map((project, i) => (
              <div>
                  <ProjectsDetails key={i} project={project} />
              </div>
            ))}
        </div>
    </div>
  );
}
