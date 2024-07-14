import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
        <div>
            <img src='https://img.freepik.com/premium-photo/healthcare-medical-concept-group-doctors_380164-39487.jpg?w=360' className='rounded-3xl shadow-lg' style={{width:"auto",height:"400px"}} />
        </div>
        <div className='flex flex-col w-2/5 justify-center items-center'>
        <h1 className='text-4xl font-bold font-montserrat w-5/5'>Why <span className='text-blue-600 italic'>Choose</span> Us</h1>
        <p className='text-gray-300 w-4/5 mt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eum dignissimos, assumenda error molestias dicta explicabo odio at recusandae, neque id! Quam optio vero voluptas similique ea consequatur, modi cumque.</p>
        <button className="py-3 flex flex-row justify-center items-center ml-12 gap-4 px-8 bg-blue-600 mt-8 text-white rounded-2xl self-center md:self-start">
              <span>View Details</span>
              <img src="https://static-00.iconduck.com/assets.00/arrow-right-icon-2048x1281-4p12i3j3.png" className="w-8 h-4" alt="Arrow icon" />
            </button>
        </div>

    </div>
  )
}

export default WhyChooseUs
