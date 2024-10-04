'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  projectDetails: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    projectDetails: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='bg-[#17171780] relative p-20 h-screen w-full flex justify-between flex-row'>
      <div className='flex-1 space-y-5'>
        <h2 className='text-transparent leading-[60px] text-[48px] bg-clip-text bg-gradient-to-r from-[#4AC7FA] to-[#E649F5] text-4xl font-bold'>
          Let’s build something <br />
          great together
        </h2>
        <p className='text-[#ECECEC] text-[20px]'>
          We believe in turning ideas into reality and we’re ready to join your journey. Reach out to us and let’s start
          discussing your project.
        </p>
      </div>
      <div className='flex-1'>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4 lg:mb-8 2xl:mb-10">
            <div>
              <label className="block text-white mb-2" htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                className="bg-transparent border-white border-[0.5px] text-white p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                className="bg-transparent border-white border-[0.5px] text-white p-2 rounded w-full"
                required
              />
            </div>
          </div>
          <div className="mb-4 lg:mb-8 2xl:mb-10">
            <label className="block text-white mb-2" htmlFor="companyName">Company Name (optional)</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              onChange={handleChange}
              className="bg-transparent border-white border-[0.5px] text-white p-2 rounded w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4 lg:mb-8 2xl:mb-10">
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="bg-transparent border-white border-[0.5px] text-white p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                onChange={handleChange}
                className="bg-transparent border-white border-[0.5px] text-white p-2 rounded w-full"
              />
            </div>
          </div>
          <div className="mb-4 lg:mb-8 2xl:mb-10">
            <label className="block text-white mb-2" htmlFor="projectDetails">Tell us about your project (optional)</label>
            <textarea
              name="projectDetails"
              id="projectDetails"
              onChange={handleChange}
              className="bg-transparent border-white border-[0.5px] text-white p-2 rounded w-full h-32"
            />
          </div>
          <div className='flex flex-row items-center gap-10'>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#41557226] to-[#1B1B1E1A] border-[#41557280] border-[0.5px] text-white px-24 py-5 rounded-lg hover:opacity-90 transition duration-300"
            >
              Send request
            </button>
            <p className='text-[#ECECEC] text-[10px]'>
              By sending this form, I confirm that I have read and <br /> accepted the Privacy Policy
            </p>
          </div>
        </form>
      </div>

      <div className='bg-[#0F151A] absolute top-10 right-20' />
    </div>
  );
};

export default Page;
