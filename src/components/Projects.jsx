import projects from '../data/projects.json';
import ProjectBox from './ProjectBox';

export default function Projects() {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <div className='mb-16'>
        <p className='font-sans font-bold text-white text-2xl'>My Projects</p>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 p-4 gap-2 bg-slate-700 relative w-96 lg:w-144 sm:w-128 rounded-3xl mx-8 sm:mx-0'>
            {projects.map((project, i) => (
              <div className='m-1 sm:m-5'>
                  <ProjectBox key={`${i}-${project.name}`} project={project} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
