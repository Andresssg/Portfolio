import { useState } from 'react'
import HamburgerMenu from '../icons/HamburgerMenu'
import CloseMenu from '../icons/CloseMenu'

function NavBar () {
  const [isOpen, setIsOpen] = useState()
  return (
    <>
      <nav
        className='hidden fixed top-0 sm:flex justify-end gap-x-6 w-full px-8 py-4 font-semibold
      backdrop-blur-lg text-light-gray shadow-lg z-50 text-xl'
      >
        <a className='hover:scale-125 hover:text-accent duration-300' href='#'>Home</a>
        <a className='hover:scale-125 hover:text-accent duration-300' href='#about'>Sobre mi</a>
        <a className='hover:scale-125 hover:text-accent duration-300' href='#background'>Experiencia</a>
        <a className='hover:scale-125 hover:text-accent duration-300' href='#projects'>Proyectos</a>
      </nav>
      <span
        className={`${isOpen && 'hidden'} sm:hidden fixed top-0 left-0 px-8 py-4 z-50 w-full
        flex justify-end backdrop-blur-lg text-light-gray shadow-lg`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <HamburgerMenu className='h-8 w-8 cursor-pointer' />
      </span>
      <nav
        className={`sm:hidden fixed top-0 flex ${isOpen ? 'visible' : 'invisible'} flex-col 
        justify-center items-center gap-y-6 h-screen w-full px-8 py-4 z-50 
        transform transition-transform duration-500 ${isOpen ? '-translate-y-0' : '-translate-y-full'} 
        font-semibold backdrop-blur-sm text-light-gray shadow-lg text-3xl bg-primary bg-opacity-85`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='absolute top-0 right-0 px-8 py-4' onClick={() => setIsOpen(!isOpen)}>
          <CloseMenu className='h-8 w-8 cursor-pointer' />
        </span>
        <a className='hover:scale-125 hover:text-accent duration-300' href='#'>Home</a>
        <a className='hover:scale-125 hover:text-accent duration-300' href='#about'>Sobre mi</a>
        <a className='hover:scale-125 hover:text-accent duration-300' href='#background'>Experiencia</a>
        <a className='hover:scale-125 hover:text-accent duration-300' href='#projects'>Proyectos</a>
      </nav>

    </>
  )
}

export default NavBar
