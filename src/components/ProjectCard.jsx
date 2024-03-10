import Arrow from '../icons/Arrow'
import TechPill from './TechPill'

function Project ({ info }) {
  const { name, description, repoUrl, demoUrl, image, techStack } = info
  return (
    <article className='flex flex-col w-full h-[37rem] border-2 border-primary-light rounded-xl overflow-hidden cursor-pointer
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
        {
        repoUrl
          ? (
            <a
              href={repoUrl} target='_blank' rel='noreferrer'
              className='flex items-center md:gap-x-2 w-auto p-2 font-bold bg-primary-light text-secondary-light
            hover:bg-primary hover:text-primary-light duration-300'
            >Visitar repositorio <Arrow styles='w-4 h-4' />
            </a>
            )
          : <p className='w-auto p-2 text-primary-light italic'>Repositorio no disponible</p>
        }
        {
          demoUrl
            ? (
              <a
                href={demoUrl} target='_blank' rel='noreferrer'
                className='w-auto p-2 bg-primary-light text-secondary-light
              hover:bg-slate-700 hover:text-primary-light duration-300'
              >Demo
              </a>
              )
            : <p className='w-auto p-2 text-primary-light italic'>Demo no disponible</p>
        }
      </footer>
    </article>
  )
}

export default Project
