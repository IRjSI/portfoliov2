
const About = () => {
  const skills = ['React', 'Express', 'MongoDB', 'Node', 'JavaScript']

  return (
    <div className='flex flex-col justify-between gap-8 px-6 py-12'>
      <div className='w-full'>
        <p className='text-[#dad8d9]/80 font-medium cursor-pointer mb-4'>ABOUT</p>
        <h1 className='text-[#d8d8d8] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold sm:text-right text-left py-4'>
          I’m a self-driven web developer with a strong foundation in{' '}
          <span className='text-[#f40100] italic hover:text-[#f40100]/90 cursor-pointer'>
            HTML, CSS, JavaScript, React, Node, Express and MongoDB.
          </span>
          <span className='lg:block hidden'>
            My focus is on building clean, responsive, and performant web
            applications that don’t just look good — they work seamlessly.
          </span>
        </h1>
      </div>

      <div className='w-full'>
        <p className='text-[#dad8d9]/80 font-medium mb-4'>SKILLS</p>
        <div className='bg-[#f40100] rounded-full py-6 px-4 sm:px-12 flex flex-wrap justify-center sm:justify-between items-center gap-4'>
          {skills.map((skill, idx) => (
            <h1 key={idx} className='text-lg sm:text-2xl font-bold text-white'>
              {skill}
            </h1>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
