import Experience from '../components/Experience'
import data from '../data/background-info.json'

function Background () {
  return (
    <section
      id='background' className='flex flex-col px-4 my-5 justify-center items-center text-light-gray
      md:my-16 lg:max-w-7xl'
    >
      <h2 className='py-20 font-bold text-4xl md:text-5xl text-accent text-center'>Experiencia Profesional</h2>
      <div className='flex flex-col relative px-2 py-10 w-full justify-around gap-y-10 mt-10'>
        {data
          .sort((a, b) => b.id - a.id)
          .map((item, i) => {
            return (
              <Experience key={`b-${item.id}`} experience={item} position={`${i % 2 === 0 ? 'left' : 'right'}`} />
            )
          })}
        <div
          text-before='2023' text-after='HOY' className='absolute w-2 h-full bg-light-gray top-0 md:left-1/2 rounded-full font-bold
        before:absolute before:content-[attr(text-before)] before:-bottom-10 md:before:-left-9 before:text-4xl
        after:absolute after:content-[attr(text-after)] after:-top-10 md:after:-left-9 after:text-4xl'
        />
      </div>
    </section>
  )
}

export default Background
