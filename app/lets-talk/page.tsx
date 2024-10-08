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
    <div className="relative overflow-hidden bg-[#171717] bg-opacity-50">
      <div className="absolute left-[25%] h-[40%] w-[40%] rounded-full bg-[#0F151A] bg-opacity-50 blur-[70px]" />
      <div className="absolute -bottom-[20rem] -left-[16rem] h-full w-full rounded-tr-full bg-[#0F151A] bg-opacity-60 blur-[70px]" />
      <div className="absolute bottom-0 right-0 h-[50%] w-[20%] rounded-tr-full bg-[#8AA2D0] blur-[20rem]" />
      <div className={"relative z-10 flex h-screen w-full flex-row justify-between p-16"}>
        <div className="flex-1 space-y-5">
          <h2 className="bg-gradient-to-r from-[#4AC7FA] to-[#E649F5] bg-clip-text text-4xl text-[48px] font-bold leading-[60px] text-transparent">
            Let’s build something <br />
            great together
          </h2>
          <p className="text-[20px] text-[#ECECEC]">
            We believe in turning ideas into reality and we’re ready to join your journey. Reach out
            to us and let’s start discussing your project.
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
                  className="w-full rounded-xl border-[0.5px] border-[#606060] bg-transparent p-2 text-white"
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
                  className="w-full rounded-xl border-[0.5px] border-[#606060] bg-transparent p-2 text-white"
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
                className="w-full rounded-xl border-[0.5px] border-[#606060] bg-transparent p-2 text-white"
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
                  className="w-full rounded-xl border-[0.5px] border-[#606060] bg-transparent p-2 text-white"
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
                  className="w-full rounded-xl border-[0.5px] border-[#606060] bg-transparent p-2 text-white"
                />
              </div>
            </div>
            <div className="mb-4 lg:mb-8 2xl:mb-10">
              <label className="mb-2 block text-xs text-[#ECECEC]" htmlFor="firstName">
                Tell us about your project{" "}
                <span className={"text-xs text-[#606060]"}>(optional)</span>
              </label>
              <textarea
                name="projectDetails"
                id="projectDetails"
                onChange={handleChange}
                className="h-32 w-full rounded-xl border-[0.5px] border-[#606060] bg-transparent p-2 text-white"
              />
            </div>
            <div className="flex flex-row items-center gap-10">
              <button
                type="submit"
                className="rounded-2xl border-[0.5px] border-[#41557280] bg-gradient-to-r from-[#41557226] to-[#1B1B1E1A] px-24 py-5 text-white transition duration-300 hover:opacity-90">
                Send request
              </button>
              <p className="text-[10px] text-[#ECECEC]">
                By sending this form, I confirm that I have read and <br /> accepted the Privacy
                Policy
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
