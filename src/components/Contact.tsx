import React from 'react'

const Contact = () => {

  return (
    <div className="w-full px-8 py-12 relative overflow-hidden">
        <p className='text-[#dad8d9]/80 font-medium mb-8 cursor-pointer'>CONTACT</p>
        <div className="flex justify-center mb-16">
            <a href='https://github.com/IRjSI' target='_blank' className="text-[#d8d8d8] text-5xl sm:text-6xl lg:text-7xl border border-[#d8d8d8] rounded-full text-center font-medium py-6 px-8 hover:bg-[#02030d] cursor-pointer transition-all duration-200">
                GET IN TOUCH
            </a>
        </div>
        <div className="absolute bottom-[-2.8rem] left-1/2 -translate-x-1/2">
            <h1 className="text-[#d8d8d8] text-5xl sm:text-6xl lg:text-9xl text-center font-medium px-8">
                PORTFOLIO
            </h1>
      </div>
    </div>

  )
}

export default Contact
