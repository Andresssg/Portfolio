import LinkButton from './LinkButton'
import TechPill from './TechPill'

function ProjectCard ({ info }) {
  const { name, description, repoUrl, demoUrl, image, techStack } = info
  return (
    <article
      title='Mostrar mas' className='flex flex-col w-full h-[37rem] border-2 border-primary-light rounded-xl overflow-hidden cursor-pointer
    hover:bg-slate-700 md:w-[40ch] lg:w-[50ch]'
    >
      <header className='flex flex-col w-full h-1/2 justify-between'>
        <img
          src={image} alt={`Imagen del proyecto ${name}`}
          loading='lazy'
          className='object-cover h-full w-full'
        />
        <h3 className='font-bold text-2xl mx-3'>{name}</h3>
      </header>
      <main className='flex flex-col h-fit w-full p-3 gap-y-2 justify-between'>
        <section className='flex flex-wrap w-full gap-2'>
          {techStack.map(tech => {
            return (
              <TechPill key={tech} name={tech} />
            )
          })}
        </section>
        <p>{description}</p>
      </main>
      <footer className='flex w-full justify-evenly mb-2 mt-auto items-center text-center'>
        <LinkButton url={repoUrl} text='Visitar repositorio' showArrow errorText='Repositorio no disponible' />
        <LinkButton url={demoUrl} text='Ver demo' showArrow errorText='Demo no disponible' />
      </footer>
    </article>
  )
}

export default ProjectCard
