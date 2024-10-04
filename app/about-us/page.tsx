"use client";
import React from "react";
import { motion } from "framer-motion";
import { testimonial } from "@/app/about-us/constant";
import Image from "next/image";
import { Projects } from "@/app/about-us/__components/projects";

const aboutUsNavLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Client Testimonials", href: "/services" },
  { name: "Our Projects", href: "/blogs" },
];

const gradientVariants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};
const gradientTransition = { delay: 0.4, duration: 0.3 };

const AboutUs = () => {
  return (
    <section className={"container mx-auto"}>
      <div className={"relative mb-20"}>
        <motion.div
          variants={gradientVariants}
          initial="hidden"
          animate="visible"
          transition={gradientTransition}
          className="absolute h-[30%] w-[512px] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[8rem] lg:left-[22%] xl:left-[28%]"
        />
        <nav
          className={
            "relative mx-auto flex w-[70%] justify-around py-24 font-semibold lg:text-2xl xl:text-3xl"
          }>
          {aboutUsNavLinks.map((eachNav, index) => (
            <p
              className={
                "cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-linear hover:border-b-2 hover:border-b-purple-400 hover:pb-1"
              }
              key={index}>
              {eachNav.name}
            </p>
          ))}
        </nav>

        <div className={"flex flex-col gap-y-10"}>
          <h6 className={"text-sm font-light"}>About us</h6>
          <h2 className={"w-[50%] text-4xl font-semibold leading-normal"}>
            We believe in
            <span className={"text-[#7670CE]"}> ‘Crafting delightful experiences that last.’</span>
          </h2>
        </div>
        <div className={"mt-10 flex flex-col gap-y-16 leading-relaxed"}>
          <p className={"font-extralight lg:text-2xl xl:text-3xl"}>
            Kaliper Technologies is a dynamic IT consulting firm established in 2023. We specialize
            in data engineering, analytics, and artificial intelligence, providing innovative
            solutions that transform data into actionable insights.
          </p>
          <p className={"font-extralight lg:text-2xl xl:text-3xl"}>
            Our expert team excels in systems architecture, process modeling, and custom
            development, delivering tailored services that meet the unique needs of each client. We
            are committed to being a trusted partner, helping organizations navigate the
            complexities of the digital landscape and achieve their long-term business objectives.
          </p>
        </div>
      </div>

      <div className={"mx-auto mb-40 flex w-[80%] justify-between gap-x-8"}>
        <h1 className={"text-4xl font-semibold"}>Client Testimonials</h1>
        <div className={"flex w-[55%] flex-col gap-y-32"}>
          {testimonial.map((eachTestimonial, index) => (
            <div className={"flex justify-between"} key={index}>
              <p className={"border border-[#7670CE]"}></p>
              <div className={"w-[80%]"}>
                <p
                  className={
                    "font-normal leading-relaxed lg:text-3xl xl:text-4xl"
                  }>{`${'"' + eachTestimonial.content + '"'}`}</p>
                <div className={"flex items-center gap-x-10"}>
                  <Image
                    className={"mt-10"}
                    src={eachTestimonial.src}
                    alt={eachTestimonial.src}
                    height={80}
                    width={80}
                  />
                  <p className={"flex flex-col"}>
                    <span className={"font-semibold"}> {eachTestimonial.name}</span>
                    <span className={"text-xs"}>{eachTestimonial.designation}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Projects />
    </section>
  );
};

export default AboutUs;
