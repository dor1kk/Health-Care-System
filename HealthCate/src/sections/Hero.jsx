import React from 'react';
import { Form, Input, Button } from 'antd';
import Header from './Header';

const { TextArea } = Input;

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="bg-hero h-full w-full absolute top-0 left-0"></div>
      <div className="relative z-10">
        <Header />
        <div className="py-8 px-4 md:py-16 md:px-24 flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2">
            <h1 className="text-lg md:text-xl italic text-blue-700">Keep Yourself Healthy</h1>
            <h1 className="font-bold font-montserrat text-4xl md:text-6xl text-black">
              We <span className="text-blue-700 font-montserrat font-bold">Care</span> For <br />
              Your <span className="text-blue-700 font-montserrat italic font-bold">Health</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est minus, aliquid libero molestias accusantium vel quidem necessitatibus tenetur voluptatum, cupiditate asperiores. Voluptates nostrum corrupti mollitia corporis excepturi eius sunt velit?
            </p>
            <button className="py-3 flex flex-row justify-center items-center gap-4 px-8 bg-blue-600 mt-8 text-white rounded-2xl self-center md:self-start">
              <span>Book an Appointment</span>
              <img src="https://static-00.iconduck.com/assets.00/arrow-right-icon-2048x1281-4p12i3j3.png" className="w-8 h-4" alt="Arrow icon" />
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16 bg-white rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white text-xl md:text-2xl font-bold p-4 rounded-t-lg">Book an Appointment</div>
            <Form
              layout="vertical"
              className="p-4 bg-white rounded-b-lg"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <Form.Item
                  name="fullname"
                  className="flex-1"
                  rules={[{ required: true, message: 'Please enter your full name' }]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  className="flex-1"
                  rules={[{ required: true, message: 'Please enter your email address' }]}
                >
                  <Input type="email" placeholder="Email Address" />
                </Form.Item>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Form.Item
                  name="phone"
                  className="flex-1"
                  rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                  <Input type="tel" placeholder="Phone Number" />
                </Form.Item>
                <Form.Item
                  name="date"
                  className="flex-1"
                  rules={[{ required: true, message: 'Please select a date' }]}
                >
                  <Input type="date" />
                </Form.Item>
              </div>
              <Form.Item
                name="notes"
              >
                <TextArea rows={4} placeholder="Additional Notes" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="bg-blue-600">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
