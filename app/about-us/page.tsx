import React from "react";
import { testimonial } from "@/app/about-us/constant";
import Image from "next/image";
import { Projects } from "@/app/about-us/__components/projects";
import Link from "next/link";

const aboutUsNavLinks = [
  { name: "About Us", href: "#about-us" },
  { name: "Client Testimonials", href: "#testimonials" },
  { name: "Our Projects", href: "#projects" },
];

const AboutUs = () => {
  return (
    <section id={"about-us"} className={"container mx-auto overflow-hidden"}>
      <div className="absolute -top-20 h-[40%] w-[30rem] rounded-full bg-[#0F151A] bg-opacity-70 blur-3xl lg:left-[22%] xl:left-[28%]" />
      <div className="absolute -top-20 h-[40%] w-[30rem] rounded-full bg-[#8AA2D0] bg-opacity-20 blur-[10rem] lg:left-[22%] xl:left-[28%]" />
      <div className="absolute -left-20 bottom-0 h-[70%] w-[80%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <div className="absolute right-0 top-[40%] h-[30%] w-[30%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <div className="absolute right-0 top-[40%] h-[30%] w-[30%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[10rem]" />

      <div className={"z-10"}>
        <div className={"relative mb-20"}>
          <nav
            className={
              "relative mx-auto flex w-[70%] justify-around py-24 font-semibold lg:text-2xl xl:text-3xl"
            }>
            {aboutUsNavLinks.map((eachNav, index) => (
              <Link
                replace
                href={eachNav.href}
                className={
                  "cursor-pointer transition-all duration-300 ease-linear hover:text-[#7670CE]"
                }
                key={index}>
                {eachNav.name}
              </Link>
            ))}
          </nav>
          <div className={"z-10 flex flex-col gap-y-10"}>
            <h6 className={"text-sm font-light"}>About us</h6>
            <h2 className={"w-[50%] text-4xl font-semibold leading-normal"}>
              We believe in
              <span className={"text-[#7670CE]"}>
                {" "}
                ‘Crafting delightful experiences that last.’
              </span>
            </h2>
          </div>
          <div className={"z-20 mt-10 flex flex-col gap-y-6 leading-relaxed"}>
            <p className={"font-extralight lg:text-[1.3rem]"}>
              Kaliper Technologies is a dynamic IT consulting firm established in 2023. We
              specialize in data engineering, analytics, and artificial intelligence, providing
              innovative solutions that transform data into actionable insights.
            </p>
            <p className={"font-extralight lg:text-[1.3rem]"}>
              Our expert team excels in systems architecture, process modeling, and custom
              development, delivering tailored services that meet the unique needs of each client.
              We are committed to being a trusted partner, helping organizations navigate the
              complexities of the digital landscape and achieve their long-term business objectives.
            </p>
          </div>
        </div>

        <div id={"testimonials"} className={"relative"}>
          <div className="absolute -left-40 top-[40%] h-[30%] w-[30%] rounded-br-full rounded-tr-full bg-[#8AA2D0] bg-opacity-20 blur-[8rem]" />
          <div className="absolute left-0 top-[5%] h-[30%] w-full rounded-full bg-[#0F151A] bg-opacity-70 blur-[50px]" />
          <div className={"relative z-10 mx-auto mb-40 flex w-[80%] justify-between gap-x-8"}>
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
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default AboutUs;
