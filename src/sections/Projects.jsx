import Project from '../components/Project'
import data from '../data/projects-info.json'

function Projects () {
  return (
    <section id='projects' className='bg-secondary-light text-primary-light'>
      <div className='flex flex-col w-full my-5 lg:my-16 mx-auto container lg:max-w-4xl md:max-w-2xl justify-center items-center'>
        <h1 className='py-5 font-bold text-4xl lg:text-5xl'>Proyectos</h1>
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
