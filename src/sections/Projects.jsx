import useFetchInfo from '../hooks/useFetchInfo'

function Projects () {
  const { info: projects } = useFetchInfo('../../projects-info.json')
  return (
    <section id='projects' className='flex flex-col w-full mx-auto container lg:max-w-4xl md:max-w-2xl justify-center items-center bg-secondary-light'>
      <h1 className='py-5 font-bold text-4xl lg:text-5xl'>Proyectos</h1>
      {projects.map((project, index) => {
        return (
          <article key={index}>
            <h2>{project.name}</h2>
          </article>
        )
      })}
    </section>
  )
}

export default Projects
