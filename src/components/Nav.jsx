function Nav () {
  return (
    <nav className='fixed top-0 flex justify-between w-full p-8 text-secondary-light'>
      <a className='text-2xl font-bold hover:scale-150 duration-300' href='#'>AG</a>
      <div className='flex gap-x-6'>
        <a className='hover:scale-150 hover:mx-2 duration-300' href='#background'>Experiencia</a>
        <a className='hover:scale-150 hover:mx-2 duration-300' href='#projects'>Projects</a>
        <a className='hover:scale-150 hover:mx-2 duration-300' href='#footer'>Footer</a>
      </div>
    </nav>
  )
}

export default Nav
