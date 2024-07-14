import React, { useState } from 'react';
import DoctorCard from '../component/DoctorCard';
import { doctors } from '../constants';

const OurTeam = () => {
  const [bigDoctorImg, setBigDoctorImg] = useState(
    'https://pngimg.com/d/doctor_PNG15959.png'
  );

  return (
    <div className="bg-blue-50 min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-blue-600 font-montserrat italic">Who Are We?</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our <span className='text-blue-600 italic font-bold'>Team</span></h2>
          <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore necessitatibus exercitationem aut, eveniet perspiciatis quia beatae asperiores similique, iusto magni, eum enim praesentium totam sint et. Porro, dignissimos quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus libero ac lobortis tristique.</p>
        </div>

        <div className="relative flex justify-center items-center">
          <img
            src={bigDoctorImg}
            alt="tech collection"
            width={610}
            height={502}
            className="object-contain rounded-full bg-white shadow-3xl z-10 w-2/5 max-h-96 sm:max-w-4xl sm:max-h-3xl"
          />

          <div className="flex gap-4  left-4 max-w-full sm:px-6">
            {doctors.map((image, index) => (
              <div key={index} className='bg-white'>
                <DoctorCard
                  index={index}
                  imgURL={image}
                  changeBigDoctorImage={(item) => setBigDoctorImg(item)}
                  bigDoctorImg={bigDoctorImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
