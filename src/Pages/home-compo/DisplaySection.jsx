import React from 'react'

export const DisplaySection = () => {
  return (
      <div className="bg-slate-100 h-dvh select-none"  >
          <div className='grid grid-cols-2  items-center'>
              <div className='h-[450px] px-10 '>
              <dotlottie-player src="https://lottie.host/52e34f45-c83a-4ada-be3c-b3dcea67bc8b/KQmDMr1bvG.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
              </div>
              <div className=' p-5 py-10'>
              <h1 className='font-bold text-3xl '>Hi, I am Rounak</h1>
              <p className='font-semibold text-blue-700 mt-1 italic'>Student, Coder, Developer, Learner</p>
      
      
              <p className='font-medium mt-7 w-[550px] text-slate-800 text-justify select-none'>Passionate about coding and constantly learning, I am dedicated to creating dynamic and efficient web solutions. With experience in front-end and back-end development, I enjoy working with technologies like HTML, CSS, JavaScript, and React to bring ideas to life. Let’s collaborate to build something impactful!</p>
              </div>
          </div>
      </div>
  )
}
