function NavBar () {
  return (
    <nav className='fixed top-0 flex justify-end gap-x-6 w-full px-8 py-4 font-semibold
    backdrop-blur-lg text-light-gray shadow-lg z-50 text-xl'
    >
      <a className='hover:scale-125 hover:text-accent duration-300' href='#about'>Sobre mi</a>
      <a className='hover:scale-125 hover:text-accent duration-300' href='#background'>Experiencia</a>
      <a className='hover:scale-125 hover:text-accent duration-300' href='#projects'>Proyectos</a>
    </nav>
  )
}

export default NavBar
