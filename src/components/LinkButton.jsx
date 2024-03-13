import Arrow from '../icons/Arrow'

function LinkButton ({ url, text = 'Visitar url', showArrow, errorText = 'Url no disponible' }) {
  return ((url
    ? (
      <a
        href={url} target='_blank' rel='noreferrer'
        title={text}
        className='flex items-center md:gap-x-2 w-auto p-2 font-bold bg-primary-light text-secondary-light
        hover:bg-primary hover:text-primary-light duration-300'
      >{text} {showArrow && <Arrow styles='w-4 h-4' />}
      </a>
      )
    : <p title={errorText} className='w-auto p-2 text-secondary-light italic'>{errorText}</p>
  ))
}

export default LinkButton
