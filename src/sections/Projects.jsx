import ProjectCard from '../components/ProjectCard'
import data from '../data/projects-info.json'
import { ModalContext } from '../contexts/ModalContext'
import { useContext } from 'react'

function Projects () {
  const { setShowModal, setProjectInfo } = useContext(ModalContext)
  const handleCardClick = (projectInfo) => {
    setProjectInfo(projectInfo)
    setShowModal(true)
  }
  return (
    <section id='projects' className='flex flex-col w-full px-8 py-10 bg-secondary text-primary gap-y-10 md:px-2'>
      <h1 className='font-bold text-4xl md:text-5xl text-center'>Proyectos</h1>
      <div className='flex flex-wrap w-full justify-evenly xl:justify-between gap-y-8'>
        {data.map(project => {
          return (
            <ProjectCard key={`p-${project.id}`} info={project} onClick={() => handleCardClick(project)} />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
