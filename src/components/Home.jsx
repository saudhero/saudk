import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#070a19]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
       {/* <p className='text-blue-300'>Hi, my name is</p>  */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Saud Al-ghamdi</h1>
        <h2 className='text-4xl py-2 sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I have experience with Python, JavaScript having applied these skills to develop websites for academic projects .
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400'>
              View Project
             
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowRight className='ml-3' />
              </span>
         
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;