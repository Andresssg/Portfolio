import Github from '../icons/Github'
import LinkedIn from '../icons/Linkedin'

function Hero () {
  // <div className='flex flex-col bg-red-500 w-full mx-auto container lg:max-w-4xl md:max-w-2xl justify-center items-center'>
  return (
    <section className='flex flex-col w-full h-screen p-14 pb-16 justify-end items-left bg-gradient-to-b from-secondary to-primary text-secondary'>
      <h1 className='font-bold text-6xl lg:text-8xl border-b-2 border-black'>Andres Guevara</h1>
      <h2 className='font-semibold text-3xl lg:text-4xl'>Ingeniero de Sistemas</h2>
      <h3 className='font-medium text-xl lg:text-2xl'>Desarrollador fullstack</h3>
      <div className='flex gap-2 mt-2'>
        <Github className='w-7 hover:scale-150 hover:text-white duration-300' />
        <LinkedIn className='w-7 hover:scale-150 hover:text-linkedin duration-300' />
      </div>
    </section>
  )
}

export default Hero
