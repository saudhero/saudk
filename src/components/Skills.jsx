import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import elephant from '../assets/elephant.png';
import Jupyter from '../assets/jupyter.png';
import python from '../assets/python.png';
import github from '../assets/github.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#070a19] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-blue-400 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#5c5f63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>Html</p>
              </div>
              <div className='shadow-md shadow-[#5c5f63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#5c5f63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#5c5e63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#5c5f63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#5c5f63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={elephant} alt="HTML icon" />
                  <p className='my-4'>PostgreSQL</p>
              </div>
              <div className='shadow-md shadow-[#5c5f63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Jupyter} alt="HTML icon" />
                  <p className='my-4'>Jupyter</p>
              </div>
              <div className='shadow-md shadow-[#5c5f63] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={github} alt="HTML icon" />
                  <p className='my-4'>Github</p>
              </div>
             
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
