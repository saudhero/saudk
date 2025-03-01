import React, { useState } from 'react';
import videoFile from '../assets/Demo.mp4'; 
import ra from '../assets/ra.png';

const Project = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleDemoClick = () => {
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div name='work' className='w-full pt-20 md:h-screen text-gray-300 bg-[#070a19]'>
      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-400'>
            Project
          </p>
          <p className='py-6'>// Check out of my graduation project</p>
        </div>
        <div style={{backgroundImage: `url(${ra})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto   content-div">

     {!showVideo && (
            <div className='opacity-0  group-hover:opacity-100'>
              <span className='text-2xl  font-signutre text-gray-100'>
                Cyber Saudi Shield
              </span>
            </div>
           )}
               
          {!showVideo && ( 
           <div className='opacity-0  group-hover:opacity-100 pt-4 text-center'>
              <span className='text-2xl  font-signutre text-gray-100'>
              <button
                onClick={handleDemoClick}
                className=' text-center shadow-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
                
              </button>
              </span>
            </div>
            
         )} 

          {showVideo && (
            <div>
              <video
                controls
                width='100%'
                className='mt-4'
                onEnded={handleVideoEnd}
              >
                <source src={videoFile} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={handleCloseVideo}
                className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Close Demo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;