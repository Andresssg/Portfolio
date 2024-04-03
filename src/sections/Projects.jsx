import ProjectCard from '../components/ProjectCard'
import data from '../data/projects-info.json'

function Projects () {
  return (
    <section
      id='projects' className='flex flex-col px-4 my-5 pt-10 justify-center items-center text-light-gray
  lg:my-20 lg:max-w-7xl'
    >
      <h1 className='py-5 font-bold text-4xl md:text-5xl text-accent text-center'>Proyectos</h1>
      <div className='flex flex-col md:flex-row md:flex-wrap w-full items-center justify-around gap-y-8'>
        {data.map(project => {
          return (
            <ProjectCard key={`p-${project.id}`} info={project} />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
