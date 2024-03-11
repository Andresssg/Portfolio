import ICONS from '../icons/IconsIndex'

function TechPill ({ name }) {
  const iconObj = ICONS[name] || null
  const Icon = iconObj?.component || null
  const url = iconObj?.url || '#'
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      title='Ir a la documentación de la tecnología'
      className='flex items-center gap-x-2 px-3 py-2 text-xs font-semibold uppercase rounded-full border-2 border-primary-light hover:scale-125 duration-300 hover:bg-primary-light hover:text-secondary-light'
    >
      {Icon && <Icon className='w-4 h-4' />}
      {name}
    </a>
  )
}

export default TechPill
