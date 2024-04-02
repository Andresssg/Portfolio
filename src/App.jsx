import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Background from './sections/Background'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

function App () {
  return (
    <div className='flex flex-col min-h-screen items-center content-center bg-primary'>
      <NavBar />
      <Hero />
      <Background />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
