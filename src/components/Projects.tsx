import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null); // Reference to the section
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  const projects = [
    { name: 'VIDTUBE', status: 'Not Yet', link: 'https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/26AC/production/_107000990_grumpycat5.jpg' },
    { name: 'NOTE-COVE', status: 'Live', link: 'https://note-cove.vercel.app' },
    { name: 'BOOK-MANAGER', status: 'Live', link: 'https://book-trakker.vercel.app' },
    { name: 'LEARN TO PRONOUNCE', status: 'Live', link: 'https://ltpronounce.vercel.app' },
    { name: 'WEATHER WEB', status: 'Live', link: 'https://weatherwebb.vercel.app' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full px-4 sm:px-8 py-12"
      id="projects"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.p
        className="text-[#dad8d9]/80 font-medium mb-8 cursor-pointer text-sm sm:text-base"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
        PROJECTS
      </motion.p>

      <motion.div className="flex flex-col gap-6 items-center">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col sm:flex-row justify-between items-center pb-4 w-full max-w-2xl"
            variants={itemVariants}
          >
            <h2 className="text-[#d8d8d8] text-2xl sm:text-3xl font-semibold mb-2 sm:mb-0 text-center sm:text-left">
              {project.name}
            </h2>
            <div className="flex gap-4 items-center">
              <p
                className={`${
                  project.status === 'Live'
                    ? 'bg-green-300 text-green-700 border border-green-700'
                    : 'bg-red-300 text-red-700 border border-red-700'
                } font-medium px-2 py-0.5 rounded-sm text-sm`}
              >
                {project.status} •
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f40100] hover:text-[#d8d8d8] transition"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-up-right"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </motion.svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
