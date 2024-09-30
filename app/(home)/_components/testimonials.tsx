import React from "react";
import Image from "next/image";
import { testimonials } from "@/app/(home)/constant";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = (): React.ReactNode => {
  return (
    <div className="mx-auto h-full w-full max-w-lg flex-grow">
      <div className="relative flex h-full flex-col justify-between">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={"group"}>
            <div className="flex transform gap-x-4 transition-all duration-300 ease-in-out group-hover:-translate-x-8">
              <p className="rounded-xl border-[3.5px] border-[#B9B5B566] border-opacity-40 group-hover:border-[#50C2FA]"></p>
              <div className="relative h-28 w-80">
                <Image src={testimonial.src} fill alt={"testimonial user image"} />
              </div>
              <div className="flex flex-col gap-y-2 font-poppins">
                <div className={"ab relative flex justify-between"}>
                  <h1 className="text-lg font-semibold">{testimonial.name}</h1>
                  <p
                    className={
                      "absolute -top-4 right-6 text-6xl font-bold italic group-hover:text-[#50C2FA]"
                    }>
                    “
                  </p>
                </div>
                <p className="text-xs font-normal opacity-75">{testimonial.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={"mt-10 flex justify-center gap-x-4"}>
        <ChevronLeft size={32} color={"#50C2FA"} className={"rounded-full border bg-white"} />
        <ChevronRight size={32} color={"#50C2FA"} className={"rounded-full border bg-white"} />
      </div>
    </div>
  );
};
