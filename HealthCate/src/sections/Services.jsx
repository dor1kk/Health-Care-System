import React from 'react'
import { healthcareServices } from '../constants'

const Services = () => {
  return (
    <div className='flex flex-row gap-8 mt-24'>
        {healthcareServices.map((service)=>{
            return(
                <div key={service.name} className='shadow-3xl rounded-3xl flex flex-col gap-4 justify-center items-center p-4 '>
                        <img src={service.icon} className='w-16 mt-[-50px] h-16 rounded-full'></img>
                        <h1 className='text-xl font-bold italic font-montserrat'>{service.title}</h1>
                        <p className='font-montserrat text-gray-500'>{service.description}</p>
                        
                    </div>
            );
        })}
       
    
      
    </div>
  )
}

export default Services

