import { keywords } from '../hooks/keywords'

function KeywordsComp ({ className = '', description = '' }) {
  const sortedKeywords = keywords.sort((a, b) => b.length - a.length)
  const regex = new RegExp(`(${sortedKeywords.join('|')})`, 'gi')
  const descriptionFragments = description.split(regex)
  return (
    <p className={className}>
      {descriptionFragments.map((fragment, index) => {
        const isKeyword = sortedKeywords.includes(fragment)
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
