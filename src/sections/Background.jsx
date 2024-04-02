import Experience from '../components/Experience'
import data from '../data/background-info.json'

function Background () {
  return (
    <section id='background' className='flex flex-col w-full my-5 lg:my-16 mx-auto container lg:max-w-4xl md:max-w-2xl justify-center items-center text-light-gray'>
      <h1 className='py-5 font-bold text-4xl lg:text-5xl'>Experiencia Profesional</h1>
      {data.sort((a, b) => b.id - a.id).map(item => (
        <Experience key={`b-${item.id}`} experience={item} />
      ))}
    </section>
  )
}

export default Background
