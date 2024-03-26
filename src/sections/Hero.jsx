import Github from '../icons/Github'
import LinkedIn from '../icons/Linkedin'

function Hero () {
  return (
    <section className='flex flex-col w-full h-screen p-14 pb-16 justify-end items-left
    text-accent
    '
    >
      <h1 className='font-bold text-6xl lg:text-8xl typewriter'>Andres Guevara</h1>
      <h2 className='font-semibold text-3xl lg:text-4xl'>Ingeniero de Sistemas</h2>
      <h3 className='font-medium text-xl lg:text-2xl'>Desarrollador fullstack</h3>
      <div className='flex gap-2 mt-2 md:gap-5'>
        <Github className='w-7 md:w-12 hover:scale-150 hover:text-white duration-300' />
        <LinkedIn className='w-7 md:w-12 hover:scale-150 hover:text-linkedin duration-300' />
      </div>
    </section>
  )
}

export default Hero
