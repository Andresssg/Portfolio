function Keywords ({ description = '' }) {
  const keywords = ['Java', 'Spring Boot', 'Angular', 'NodeJS', 'React', 'SCRUM', 'APIs']
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi')
  const descriptionFragments = description.split(regex)

  return (
    <p className='font-normal text-lg lg:text-xl'>
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

export default Keywords
