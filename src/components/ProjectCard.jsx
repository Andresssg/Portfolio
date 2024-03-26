import useIcon from '../hooks/useIcon'

function ProjectCard ({ info, onClick }) {
  const { name, shortDescription, mainImage, techStack } = info
  return (
    <article
      title='Mostrar mas' className='project-card flex flex-col relative gap-y-2 p-4 w-full justify-center rounded-xl
      overflow-hidden cursor-pointer md:w-[40ch] lg:w-[50ch]  shadow-lg border-4 border-slate-700'
      onClick={onClick}
    >
      <header className='flex flex-col w-full justify-between gap-y-2 z-10'>
        <img
          src={mainImage} alt={`Imagen del proyecto ${name}`}
          loading='lazy'
          className='object-cover h-48 w-full rounded-lg'
        />
        <h3 className='font-bold text-2xl flex-grow'>{name}</h3>
      </header>
      <main className='flex flex-col h-fit w-full gap-y-2 justify-between z-10'>
        <section className='flex flex-wrap w-full'>
          {techStack.map(tech => {
            const { Icon } = useIcon(tech)
            return (
              Icon &&
                <span
                  key={`pc-${tech}`}
                  title={tech} className='-mr-5 p-1.5 bg-secondary rounded-full border-2 border-slate-500
                  hover:scale-110 hover:mr-0 hover:shadow-custom hover:shadow-primary duration-200'
                >
                  <Icon
                    className='w-6 h-6'
                  />
                </span>
            )
          })}
        </section>
        <p>{shortDescription}</p>
      </main>
    </article>
  )
}

export default ProjectCard
