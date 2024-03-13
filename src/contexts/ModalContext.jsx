import { createContext, useState } from 'react'

export const ModalContext = createContext(null)

export default function ModalContextProvider ({ children }) {
  const [showModal, setShowModal] = useState(false)
  const [projectInfo, setProjectInfo] = useState({
    name: '',
    shortDescription: '',
    description: '',
    repoUrl: '',
    demoUrl: '',
    mainImage: '',
    images: [],
    techStack: []
  })

  const contextValue = {
    showModal,
    setShowModal: (value) => setShowModal(value),
    projectInfo,
    setProjectInfo: (value) => setProjectInfo(value)
  }
  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}
