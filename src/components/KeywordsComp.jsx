import { keywords } from '../hooks/keywords'
function KeywordsComp ({ className = '', description = '' }) {
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi')
  const descriptionFragments = description.split(regex)

  return (
    <p className={className}>
      {descriptionFragments.map((fragment, index) => {
        const isKeyword = keywords.includes(fragment)
        return (
          <span key={index} className={isKeyword ? 'text-accent font-bold' : ''}>
            {fragment}
          </span>
        )
      })}
    </p>
  )
}

export default KeywordsComp
