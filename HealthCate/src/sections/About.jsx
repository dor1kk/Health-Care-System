import React from 'react'

const About = () => {
  return (
    <div className='flex flex-row mt-8'>
      <div className='w-4/5'>
        <p className='font-montserrat text-blue-600 italic'>What do we do?</p>
        <h1 className='text-gray-700 font-montserrat font-bold text-4xl'>LEARN <span className='text-blue-600 italic font-montserrat font-bold'>ABOUT</span> US</h1>
        <p className='text-gray-400 mt-8 w-4/5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis velit id reiciendis excepturi ipsum minima provident praesentium omnis ducimus enim fugiat impedit esse magnam, iusto voluptas tempora nihil sed facere?</p>
        <button className="py-3 flex flex-row justify-center items-center gap-4 px-8 bg-blue-600 mt-8 text-white rounded-2xl self-center md:self-start">
              <span>View Details</span>
              <img src="https://static-00.iconduck.com/assets.00/arrow-right-icon-2048x1281-4p12i3j3.png" className="w-8 h-4" alt="Arrow icon" />
            </button>
      </div>
      <div>
        <img className='rounded-3xl' src='https://thumbs.dreamstime.com/b/set-collage-young-doctor-29412471.jpg'></img>
      </div>
    </div>
  )
}

export default About
