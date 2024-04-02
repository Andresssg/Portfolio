import Arrow from '../icons/Arrow'

function LinkButton ({ url, text = 'Visitar url', showArrow, errorText = 'Url no disponible' }) {
  return ((url
    ? (
      <a
        href={url} target='_blank' rel='noreferrer'
        title={text}
        className='flex justify-center items-center md:gap-x-2 w-1/2 p-2 font-bold bg-light-gray text-primary
        duration-300'
      >{text} {showArrow && <Arrow styles='w-4 h-4' />}
      </a>
      )
    : <p title={errorText} className='text-center w-auto p-2 text-light-gray italic'>{errorText}</p>
  ))
}

export default LinkButton
