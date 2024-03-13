import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'

export default function useModalContext () {
  const { showModal, setShowModal } = useContext(ModalContext)
  return { showModal, setShowModal }
}
