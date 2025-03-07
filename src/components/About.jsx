import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#070a19] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Saud, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Recent graduate with a Bachelor's degree in Information Technology, with a solid understanding of IT fundamentals and hands-on experience in academic projects. Eager to apply my knowledge in a professional environment and grow my skills further. Enthusiastic about contributing to a team and advancing my career in the IT field.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
