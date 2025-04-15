import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null); // Reference to the section
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const skills = ['React', 'Express', 'MongoDB', 'Node', 'JavaScript'];

  return (
    <motion.div
      ref={ref}
      className='flex flex-col justify-between gap-8 px-6 py-12'
      id="about"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className='w-full'
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className='text-[#dad8d9]/80 font-medium cursor-pointer mb-4'>ABOUT</p>
        <motion.h1
          className='text-[#d8d8d8] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold sm:text-right text-left py-4'
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I’m a self-driven web developer with a strong foundation in{' '}
          <span className='text-[#f40100] italic hover:text-[#f40100]/90 cursor-pointer'>
            HTML, CSS, JavaScript, React, Node, Express and MongoDB.
          </span>
          <span className='lg:block hidden'>
            My focus is on building clean, responsive, and performant web
            applications that don’t just look good — they work seamlessly.
          </span>
        </motion.h1>
      </motion.div>

      <motion.div
        className='w-full'
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <p className='text-[#dad8d9]/80 font-medium mb-4'>SKILLS</p>
        <motion.div
          className='bg-[#f40100] rounded-full py-6 px-4 sm:px-12 flex flex-wrap justify-center sm:justify-between items-center gap-4'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {skills.map((skill, idx) => (
            <motion.h1
              key={idx}
              className='text-lg sm:text-2xl font-bold text-white'
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.h1>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
