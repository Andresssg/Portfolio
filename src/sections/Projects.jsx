import ProjectCard from '../components/ProjectCard'
import data from '../data/projects-info.json'

function Projects () {
  return (
    <section
      id='projects' className='flex flex-col px-4 my-5 justify-center items-center text-light-gray
      md:my-16 w-full'

    >
      <h1 className='py-20 font-bold text-4xl md:text-5xl text-accent text-center'>Proyectos</h1>
      <div className='flex flex-col w-full md:flex-row md:flex-wrap justify-around items-center gap-y-8'>
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
