"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

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
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    projectDetails: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container relative overflow-hidden bg-[#171717]">
      <div className="absolute left-[25%] h-[40%] w-[40%] rounded-full bg-[#0F151A] blur-[70px]" />
      <div className="absolute left-[25%] h-[40%] w-[40%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[8rem]" />
      <div className="absolute -bottom-[20rem] -left-[16rem] h-full w-full rounded-tr-full bg-[#0F151A] bg-opacity-60 blur-[70px]" />
      <div className="absolute -bottom-20 -right-20 h-[50%] w-[20%] rounded-tr-full bg-[#8AA2D0] bg-opacity-50 blur-[8rem]" />
      <div className="absolute -bottom-20 -right-20 h-[80%] w-[20%] rounded-tr-full bg-[#0F151A] bg-opacity-60 blur-[80px]" />
      <div className={"relative z-10 m-auto flex h-[100vh] w-[90%] items-center"}>
        <div className={"m-auto flex gap-x-14"}>
          <div className="flex-1 space-y-5">
            <h2 className="bg-gradient-to-r from-[#4AC7FA] to-[#E649F5] bg-clip-text font-bold !leading-relaxed text-transparent lg:text-[2rem] xl:text-5xl">
              <span className={"text-nowrap"}>Let’s build something </span>
              <br />
              great together
            </h2>
            <p className="font-light !leading-relaxed text-[#ECECEC] lg:text-base xl:text-xl">
              We believe in turning ideas into reality and we’re ready to join your journey. Reach
              out to us and let’s start discussing your project.
            </p>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mb-8 2xl:mb-10">
                <div>
                  <label className="mb-2 block text-xs text-[#ECECEC]" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#60606080] bg-transparent p-2 text-white focus:outline-0"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs text-[#ECECEC]" htmlFor="firstName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#60606080] bg-transparent p-2 text-white focus:outline-0"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 lg:mb-8 2xl:mb-10">
                <label className="mb-2 block text-xs text-[#ECECEC]" htmlFor="firstName">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#60606080] bg-transparent p-2 text-white focus:outline-0"
                />
              </div>
              <div className="mb-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mb-8 2xl:mb-10">
                <div>
                  <label className="mb-2 block text-xs text-[#ECECEC]" htmlFor="firstName">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#60606080] bg-transparent p-2 text-white focus:outline-0"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs text-[#ECECEC]" htmlFor="firstName">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#60606080] bg-transparent p-2 text-white focus:outline-0"
                  />
                </div>
              </div>
              <div className="mb-4 lg:mb-8 2xl:mb-10">
                <label className="mb-2 block text-xs text-[#ECECEC]" htmlFor="firstName">
                  Tell us about your project
                  <span className={"text-xs text-[#606060]"}>(optional)</span>
                </label>
                <textarea
                  name="projectDetails"
                  id="projectDetails"
                  onChange={handleChange}
                  className="h-32 w-full rounded-lg border border-[#60606080] bg-transparent p-2 text-white focus:outline-0 xl:h-40"
                />
              </div>
              <div className="flex w-full items-center justify-between gap-x-8">
                <button
                  type="submit"
                  className="rounded-xl border border-[#415572] border-opacity-50 bg-gradient-to-r from-[#41557226] to-[#1B1B1E1A] px-5 text-sm font-semibold text-white transition duration-300 hover:opacity-90 lg:w-[60%] lg:py-4 xl:w-[50%] xl:py-5">
                  Send request
                </button>
                <p className="w-[45%] text-[#ECECEC80] lg:text-[0.6rem] xl:text-[0.625rem]">
                  By sending this form, I confirm that I have read and accepted the Privacy Policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
