import Project from '../components/ProjectCard'
import data from '../data/projects-info.json'

function Projects () {
  return (
    <section id='projects' className='flex flex-col w-full px-8 py-10 bg-secondary-light text-primary-light gap-y-10 md:px-2'>
      <h1 className='font-bold text-4xl md:text-5xl text-center'>Proyectos</h1>
      <div className='flex flex-wrap w-full justify-evenly xl:justify-between gap-y-8'>
        {data.map(project => {
          return (
            <Project key={`p-${project.id}`} info={project} />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
