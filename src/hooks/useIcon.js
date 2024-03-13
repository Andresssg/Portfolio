import ICONS from '../icons/IconsIndex'

function useIcon (iconName) {
  const iconObj = ICONS[iconName] || null
  const Icon = iconObj?.component || null
  const url = iconObj?.url || '#'

  return { Icon, url }
}

export default useIcon
