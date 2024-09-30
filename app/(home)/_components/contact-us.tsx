"use client";
import React from "react";
import { Testimonials } from "@/app/(home)/_components/testimonials";

export const ContactUs = (): React.ReactNode => {
  return (
    <section className={"container mx-auto my-32"}>
      <h1 className={"mb-16 text-center text-5xl font-semibold text-slate-400"}>
        Success Stories of our clients
      </h1>
      <div className={"flex h-[32rem] w-full"}>
        <div
          className={
            "w-[40%] rounded-xl border border-[#41557280] border-opacity-50 bg-gradient-to-r from-[#41557226] to-[#1B1B1E1A] p-8"
          }>
          <div className={"mb-10 flex flex-col gap-y-8"}>
            <h1 className={"text-4xl font-semibold leading-relaxed"}>
              Let&apos;s Build something great together.
            </h1>
            <div className={"flex justify-between"}>
              <input
                type={"text"}
                placeholder={"First Name"}
                className={
                  "border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
                }
              />
              <input
                type={"text"}
                placeholder={"Last Name"}
                className={
                  "border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
                }
              />
            </div>
            <div>
              <input
                placeholder="Company Name (optional)"
                className="w-full border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
              />
            </div>
            <div className={"flex justify-between"}>
              <input
                type={"text"}
                placeholder={"Email"}
                className={
                  "border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
                }
              />
              <input
                type={"text"}
                placeholder={"Phone Number"}
                className={
                  "border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
                }
              />
            </div>
            <div>
              <input
                placeholder="Tell us about project (optional)"
                className="w-full border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
              />
            </div>
          </div>
          <div>
            <button className={"rounded-lg bg-[#FFFFFFB2] bg-opacity-70 px-7 py-2 text-black"}>
              <span className={"text-xs font-semibold"}>Send Message</span>
            </button>
          </div>
        </div>
        <Testimonials />
      </div>
    </section>
  );
};
