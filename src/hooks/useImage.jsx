import cesp from '../assets/cesp.webp'
import portfolio from '../assets/portfolio.webp'

function useImage (name) {
  const images = [cesp, portfolio]
  const [baseName, ext] = name.split('.')
  const img = images.find(img => new RegExp(`${baseName}.*\\.${ext}`).test(img))
  return img
}

export default useImage
