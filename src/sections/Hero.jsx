import Github from '../icons/Github'
import LinkedIn from '../icons/Linkedin'
import Mail from '../icons/Mail'

function Hero () {
  return (
    <section className='flex flex-col w-full h-screen p-14 pb-16 justify-end items-left
    text-light-gray
    '
    >
      <h1 className='font-bold text-6xl lg:text-8xl typewriter text-accent'>Andres Guevara</h1>
      <h2 className='font-semibold text-3xl lg:text-4xl'>Ingeniero de Sistemas</h2>
      <h3 className='font-medium text-xl lg:text-2xl'>Desarrollador fullstack</h3>
      <div className='flex gap-2 mt-2 md:gap-5 items-center'>
        <Github className='w-7 md:w-12 hover:scale-110 hover:text-accent duration-300' />
        <LinkedIn className='w-7 md:w-12 hover:scale-110 hover:text-accent duration-300' />
        <Mail className='w-7 md:w-14 hover:scale-110 hover:text-accent duration-300' />
      </div>
    </section>
  )
}

export default Hero
