import React from 'react';

const Header = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <img src='https://www.logolynx.com/images/logolynx/s_37/37215683c54cc821459d90034330ffec.png' className='w-16 h-16'></img>
        </div>
        <div className="space-x-4">
          <a href="#home" className="text-blue-600 hover:text-blue-200">Home</a>
          <a href="#services" className="text-blue-600 hover:text-blue-200">Services</a>
          <a href="#about" className="text-blue-600 hover:text-blue-200">About Us</a>
          <a href="#contact" className="text-blue-600 hover:text-blue-200">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#login" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-100">Login</a>
          <a href="#signup" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-500">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
