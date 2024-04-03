import useDiffDates from '../hooks/useDiffDates'
import Keywords from './Keywords'

function Experience ({ experience, position = 'left' }) {
  const { title, company, description, start, end } = experience
  const { startLocaleDate, endLocaleDate, amountMonths } = useDiffDates(start, end)
  const stylesLeft = 'self-start md:text-end after:-right-5 order-1'
  const stylesRight = 'self-end text-start after:-left-5 md:ml-4 order-2'

  return experience
    ? (
      <div className='flex w-full font-semibold text-xl lg:text-2xl'>
        <div className={`hidden md:flex gap-x-2 capitalize my-auto w-1/2 ${position === 'left' ? 'order-2 justify-start px-8' : 'order-1 justify-end px-3.5'}`}>
          <p>{startLocaleDate}</p>
          <p className='text-accent'>·</p>
          <p>{endLocaleDate}</p>
        </div>
        <article className={`flex flex-col relative py-10 px-5 w-full md:w-1/2
        md:gap-y-5 justify-center bg-secondary rounded-lg
        after:absolute ${position === 'left' ? stylesLeft : stylesRight}
        after:hidden md:after:block after:my-auto after:w-8 after:h-8 after:rounded-full after:border-4 
        after:border-light-gray after:bg-primary after:z-10
        before:absolute md:before:hidden before:my-auto before:w-8 before:h-8 before:rounded-full before:border-4 
        before:border-light-gray before:bg-primary before:z-10 before:-left-3
      `}
        >
          <div className='px-6'>
            <h2 className='font-bold'>{title}</h2>
            <p className='text-accent'>{company}</p>
            <div className='md:hidden flex gap-x-2 capitalize text-lg'>
              <p>{startLocaleDate}</p>
              <p className='text-accent'>·</p>
              <p>{endLocaleDate}</p>
            </div>
            <p className='text-lg lg:text-xl'>{amountMonths} meses</p>
            <Keywords description={description} />
          </div>
        </article>
      </div>
      )
    : (
      <div className='flex flex-col w-full mx-auto container lg:max-w-4xl md:max-w-2xl justify-center items-center'>
        <h2>No se ha podido recuperar la información</h2>
      </div>
      )
}

export default Experience
