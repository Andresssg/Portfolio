function Mail ({ className = '' }) {
  const email = 'guevaraandres.dev@gmail.com'
  return (
    <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
      <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M22 8.32V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.69l2 1.09 7.52 4.1A1 1 0 0 0 12 14a1 1 0 0 0 .5-.14L20 9.49Z' fill='currentColor' />
        <path d='m22 6-2 1.18-8 4.67L4 7.5 2 6.4V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z' fill='currentColor' />
      </svg>
    </a>
  )
}

export default Mail
