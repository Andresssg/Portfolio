import useIcon from '../hooks/useIcon'
import LinkButton from './LinkButton'

function ProjectCard ({ info }) {
  const { name, description, mainImage, techStack, urls } = info
  const { demoUrl, repoUrl } = urls
  let redirectInfo = {}
  let renderRepoButton = false
  if (demoUrl == null && repoUrl == null) {
    redirectInfo = { href: '#projects', title: 'No disponible', target: '_self' }
  } else if (demoUrl != null) {
    redirectInfo = { href: demoUrl, title: 'Ir al proyecto', target: '_blank' }
    renderRepoButton = true
  } else {
    redirectInfo = { href: repoUrl, title: 'Ir al repositorio', target: '_blank' }
  }

  return (
    <article
      title={redirectInfo.title}
    >
      <a
        href={redirectInfo.href} className='project-card flex flex-col relative gap-y-2 p-4 w-full justify-center rounded-xl
        overflow-hidden cursor-pointer md:w-[40ch] lg:w-[50ch] shadow-lg border-4 border-secondary group'
        rel='noreferrer noopener' target={redirectInfo.target}
      >
        <header className='flex flex-col w-full justify-between gap-y-2 z-10'>
          <img
            src={mainImage} alt={`Imagen del proyecto ${name}`}
            loading='lazy'
            className='object-cover h-48 w-full rounded-lg aspect-video'
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
                    title={tech} className='-mr-5 p-1.5 bg-primary rounded-full border-2 border-secondary
                  hover:scale-110 hover:mr-0 hover:shadow-custom duration-200 hover:border-accent'
                  >
                    <Icon
                      className='w-6 h-6'
                    />
                  </span>
              )
            })}
          </section>
          <p>{description}</p>
          {renderRepoButton && <LinkButton url={repoUrl} text='Ir al repositorio' showArrow />}
        </main>
      </a>
    </article>
  )
}

export default ProjectCard
