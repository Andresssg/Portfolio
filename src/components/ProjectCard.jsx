import useIcon from '../hooks/useIcon'
import KeywordsComp from './KeywordsComp'
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
    <article className='p-3
    rounded-lg bg-secondary md:w-[50ch] hover:scale-105 hover:shadow-md hover:shadow-secondary duration-200'
    >
      <header className='flex flex-col font-bold text-xl md:text-2xl gap-y-4'>
        <a
          href={redirectInfo.href} target={redirectInfo.target}
          title={redirectInfo.title} rel='noreferrer'
        >
          <img
            src={mainImage}
            alt={name}
            className='w-full h-60 object-cover rounded-lg'
          />
        </a>
        <h3>{name}</h3>
      </header>
      <main>
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
        <KeywordsComp description={description} className='h-32' />
      </main>
      <footer>
        {renderRepoButton && <LinkButton url={repoUrl} text='Ir al repositorio' showArrow />}
      </footer>
    </article>
  )
}

export default ProjectCard
