function NavBar () {
  return (
    <nav className='fixed top-0 flex justify-end gap-x-6 w-full px-8 py-4 font-semibold
    backdrop-blur-lg text-light-gray shadow-lg'
    >
      <a className='hover:scale-150 duration-300' href='#background'>Experiencia</a>
      <a className='hover:scale-150 duration-300' href='#projects'>Projects</a>
      <a className='hover:scale-150 duration-300' href='#footer'>Footer</a>
    </nav>
  )
}

export default NavBar
