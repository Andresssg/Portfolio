import { useContext, useEffect } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import TechPill from '../components/TechPill'
import LinkButton from '../components/LinkButton'

function Modal () {
  const { showModal, setShowModal, projectInfo } = useContext(ModalContext)
  const { name, description, repoUrl, demoUrl, images, techStack } = projectInfo
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false)
      }
    }

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.classList.add('overflow-hidden')
    } else {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('overflow-hidden')
    }
  }, [showModal, setShowModal])

  return (
    <>
      {showModal &&
        <div
          className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'
        >
          <div className='flex flex-col relative w-11/12 max-w-6xl h-5/6 p-8 bg-white rounded-lg overflow-auto text-secondary'>
            <button
              className='absolute top-0 right-0 p-3'
              onClick={() => setShowModal(false)}
            >
              x
              {/* <CloseIcon className='w-6 h-6' /> */}
            </button>
            <header className='flex flex-col w-full justify-center'>
              <img
                src={images} alt={`Imagen del proyecto ${name}`}
                loading='lazy'
                className='object-contain w-full h-80'
              />
              <h2 className='text-2xl font-semibold'>
                {name}
              </h2>
            </header>
            <section className='flex flex-wrap w-full gap-2'>
              {techStack.map(tech => {
                return (
                  <TechPill key={tech} name={tech} />
                )
              })}
            </section>
            <p className='mt-4 text-lg'>
              {description}
            </p>
            <footer className='flex w-full justify-evenly mb-2 mt-auto items-center text-center'>
              <LinkButton url={repoUrl} text='Visitar repositorio' showArrow errorText='Repositorio no disponible' />
              <LinkButton url={demoUrl} text='Ver demo' showArrow errorText='Demo no disponible' />
            </footer>
          </div>
        </div>}
    </>
  )
}

export default Modal
