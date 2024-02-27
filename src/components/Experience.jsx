import useDiffDates from '../hooks/useDiffDates'
import Suitcase from '../icons/Suitcase'

function Experience ({ experience }) {
  const { startLocaleDate, endLocaleDate, amountMonths } = useDiffDates(experience.start, experience.end)
  return experience
    ? (
      <article className='flex flex-col my-3 w-full mx-auto px-6 container lg:max-w-4xl md:max-w-2xl lg:gap-y-5 justify-center items-left '>
        <div className='flex items-center gap-2 text-2xl lg:text-4xl'>
          <Suitcase className='w-10 h-10' />
          <h2 className='font-bold'>{experience.title}</h2>
        </div>
        <div className='mt-2 ml-5 py-2 px-6 font-semibold text-xl lg:text-2xl border-secondary-light border-l-4'>
          <p className=''>{experience.company}</p>
          <div className='flex capitalize'>
            <div className='flex gap-x-2 pr-3 items-center border-r-2 border-secondary-light'>
              <p>{startLocaleDate}</p>
              <p>·</p>
              <p>{endLocaleDate}
              </p>
            </div>
            <p className='px-3'>{amountMonths} meses</p>
          </div>
          <p className='font-normal text-lg lg:text-xl'>{experience.description}</p>
        </div>
      </article>
      )
    : (
      <div className='flex flex-col w-full mx-auto container lg:max-w-4xl md:max-w-2xl justify-center items-center'>
        <h2>No se ha podido recuperar la información</h2>
      </div>
      )
}

export default Experience
