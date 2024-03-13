import useIcon from '../hooks/useIcon'

function TechPill ({ name }) {
  const { Icon, url } = useIcon(name)
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      title='Ir a la documentación de la tecnología'
      className='flex items-center gap-x-2 px-3 py-2 text-xs font-semibold uppercase rounded-full border-2 border-secondary-light hover:scale-125 duration-300 hover:bg-secondary-light hover:text-primary-light'
    >
      {Icon && <Icon className='w-4 h-4' />}
      {name}
    </a>
  )
}

export default TechPill
