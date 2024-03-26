import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Background from './sections/Background'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Modal from './sections/Modal'
import ModalContextProvider from './contexts/ModalContext'

function App () {
  return (
    <div className='flex flex-col min-h-screen items-center content-center bg-primary'>
      <ModalContextProvider>
        <NavBar />
        <Hero />
        <Background />
        <Projects />
        <Footer />
        <Modal />
      </ModalContextProvider>
    </div>
  )
}

export default App
