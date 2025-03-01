import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#070a19] flex justify-center items-center pt-20 p-4'>
        <form method='POST' action="https://getform.io/f/bnleoewb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400 text-gray-300'>Contact</p>
                <p className=' text-gray-300 py-3 '>// Submit the form below to get in touch with me </p>
              
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-blue-400 hover:border-blue-400 px-4 py-3 my-8 mx-auto flex items-center  pb-50'>Let's Talk</button>
        </form>
    </div>
  )
}

export default Contact