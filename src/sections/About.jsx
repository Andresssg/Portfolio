import ColombianFlag from '../icons/ColombianFlag'

function About () {
  const birthDate = new Date('2000-10-02')
  const hoy = new Date()
  let age = hoy.getFullYear() - birthDate.getFullYear()
  const mes = hoy.getMonth() - birthDate.getMonth()
  if (mes < 0 || (mes === 0 && hoy.getDate() < birthDate.getDate())) { age-- }

  return (
    <section
      id='about' className='flex flex-col px-4 my-5 justify-center items-center text-light-gray
      md:my-16 lg:max-w-7xl text-xl'
    >
      <h1 className='py-20 font-bold text-4xl md:text-5xl text-accent text-center'>Sobre mi</h1>
      <div className='flex flex-col gap-y-4 md:w-[60ch]'>
        <p>Hola, tengo {age} y soy de <ColombianFlag className='w-5 h-auto inline-block' />. Soy una persona que le gusta y disfruta aprender cosas relacionadas a la tecnología. Desde muy pequeño me ha interesado la <strong className='text-accent'>programación</strong> es por eso que inicie aprendiendo a crear videojuegos en Unity.</p>
        <p>Creo que gran un porcentaje de niños suelen dejar algunos gustos de lado y yo hice parte de ese porcentaje. Comencé con nuevos gustos como el fútbol, videojuegos, series/YouTube, entre otros y me alejé de la programación.</p>
        <p>En mis últimos años de colegio no estaba seguro de que estudiar, pero finalmente regrese a lo que en un principio me interesaba <strong className='text-accent'>(programar)</strong> y decidí estudiar <strong className='text-accent'>Ingeniería de Sistemas</strong> y así llegar al punto en el que estoy hoy.</p>
        <p>Actualmente me encuentro en la búsqueda de empleo como <strong className='text-accent'>desarrollador de software</strong>, con el fin de seguir aprendiendo y creciendo en el mundo de la tecnología. <strong className='text-accent'>He usado diferentes lenguajes de programación</strong> a lo largo de mi experiencia educativa y laboral.</p>
        <p>En lo laboral tengo <strong className='text-accent'>+10 meses de experiencia profesional</strong> como desarrollador Fullstack lo que incluye manejo de tecnologías en Frontend <strong className='text-accent'>(React, Angular, JavaScript)</strong>, Backend <strong className='text-accent'>(Spring Boot, ExpressJS, NodeJS, Django)</strong> y manejo de bases de datos <strong className='text-accent'>(MySQL, MongoDB, PostgreSQL)</strong>; además poseo conocimiento básico de <strong className='text-accent'>Docker</strong>. Actualmente estoy enfocado en <strong className='text-accent'>Java.</strong></p>
      </div>
    </section>
  )
}

export default About
