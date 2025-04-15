import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className='bg-[url("https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center min-h-screen rounded-2xl px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16'
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section */}
      <motion.div
        className='flex flex-col justify-between gap-8'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className='text-[#dad8d9]/80 font-medium cursor-pointer'>HOME</p>
        <motion.h1
          className='text-4xl sm:text-6xl md:text-7xl font-semibold text-left lg:text-right bg-clip-text text-transparent bg-gradient-to-l from-[#ffe5b4] to-[#0683d5]'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          WELCOME TO THE PORTFOLIO
        </motion.h1>
        <motion.p
          className='text-base sm:text-lg md:text-xl text-[#dad8d9]/80 text-left lg:text-right lg:pl-36'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Hello there, I am a web developer passionate about building user-friendly and visually appealing web applications.
        </motion.p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className='flex justify-center items-end lg:items-end gap-4'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h1 className='text-2xl sm:text-3xl text-[#fccdaa] cursor-pointer'>
          Get in Touch
        </h1>
        <a
          href='https://x.com/_RjS_0'
          target='_blank'
          className='text-[#fccdaa] hover:text-[#ffb992] transition-all duration-200'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-up-right"
          >
            <path d="M13 5H19V11" />
            <path d="M19 5L5 19" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Home;
