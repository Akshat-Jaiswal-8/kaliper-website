"use client";
import React from "react";
import { testimonials } from "@/app/(home)/constant";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ContactUs = (): React.ReactNode => {
  return (
    <section className={"mx-auto mb-32 mt-20 w-[90%] px-6"}>
      <h1 className={"mb-12 text-center text-5xl font-semibold text-slate-400"}>
        Success Stories of our clients
      </h1>
      <div className={"flex h-[78vh] w-full justify-between"}>
        <div
          className={
            "flex flex-col justify-between rounded-xl border border-[#41557280] border-opacity-50 bg-gradient-to-r from-[#41557226] to-[#1B1B1E1A] p-8 lg:w-[50%]"
          }>
          <div className={"flex h-full flex-col justify-between"}>
            <h1 className={"font-semibold leading-relaxed lg:text-3xl xl:text-4xl"}>
              Let&apos;s Build something great together.
            </h1>
            <div className={"flex justify-between"}>
              <input
                type={"text"}
                placeholder={"First Name"}
                className={
                  "w-[40%] border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
                }
              />
              <input
                type={"text"}
                placeholder={"Last Name"}
                className={
                  "w-[40%] border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
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
                  "w-[40%] border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
                }
              />
              <input
                type={"text"}
                placeholder={"Phone Number"}
                className={
                  "w-[40%] border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
                }
              />
            </div>
            <div>
              <input
                placeholder="Tell us about project (optional)"
                className="w-full border-b border-b-[#41557240] bg-transparent pb-2 text-sm focus:border-b-[#41557240] focus:outline-none"
              />
            </div>
            <div>
              <button
                aria-label={"Send Message"}
                className={"rounded-lg bg-[#FFFFFFB2] bg-opacity-70 px-7 py-2 text-black"}>
                <span className={"text-xs font-semibold"}>Send Message</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto h-full lg:w-[40%]">
          <div className="relative flex h-full flex-col justify-around">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={"group"}>
                <div className="flex transform gap-x-4 transition-all duration-300 ease-in-out group-hover:-translate-x-8">
                  <p className="rounded-xl border-[3.5px] border-[#B9B5B566] border-opacity-40 group-hover:border-[#50C2FA]"></p>
                  <div className="relative h-28 w-80">
                    <Image src={testimonial.src} fill alt={"testimonial user image"} />
                  </div>
                  <div className="flex flex-col gap-y-2 font-poppins">
                    <div className={"ab relative flex justify-between"}>
                      <h1 className="text-lg font-semibold 2xl:text-2xl">{testimonial.name}</h1>
                      <p
                        className={
                          "absolute -top-4 right-6 text-6xl font-bold italic group-hover:text-[#50C2FA]"
                        }>
                        “
                      </p>
                    </div>
                    <p className="text-xs font-normal opacity-75 2xl:text-lg">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={"flex justify-center gap-x-4"}>
            <ChevronLeft size={32} color={"#50C2FA"} className={"rounded-full border bg-white"} />
            <ChevronRight size={32} color={"#50C2FA"} className={"rounded-full border bg-white"} />
          </div>
        </div>
      </div>
    </section>
  );
};
