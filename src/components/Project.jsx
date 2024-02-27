function Project ({ info }) {
  const { name, description, repoUrl, demoUrl, image, techStack } = info
  return (
    <article className='flex flex-col'>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{repoUrl}</p>
      <p>{demoUrl}</p>
      <img src={image} alt={name} />
      {techStack.map(tech => {
        return (
          <p key={tech}>{tech}</p>
        )
      })}
    </article>
  )
}

export default Project
