"use client";
import React from "react";
import { testimonial } from "@/app/about-us/constant";
import Image from "next/image";
import { Projects } from "@/app/about-us/__components/projects";
import { Footer } from "@/app/(home)/_components/footer";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type aboutUsNavLinksProps = {
  name: string;
  href: string;
};

const aboutUsNavLinks: aboutUsNavLinksProps[] = [
  { name: "Client Testimonials", href: "#testimonials" },
  { name: "Our Projects", href: "#projects" },
];

const AboutUs = (): React.ReactNode => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section id={"about-us"} className={"container mx-auto overflow-hidden"}>
        <div className="absolute -top-20 h-[40%] w-[30rem] rounded-full bg-[#0F151A] blur-3xl lg:left-[22%] xl:left-[28%]" />
        <div className="absolute -top-20 h-[40%] w-[30rem] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[8rem] lg:left-[22%] xl:left-[28%]" />
        <div className="absolute -bottom-10 -left-20 h-[70%] w-[80%] rounded-full bg-[#0F151A] blur-[70px]" />
        <div className="absolute right-0 top-[40%] h-[30%] w-[30%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
        <div className="absolute right-0 top-[40%] h-[30%] w-[30%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[8rem]" />

        <div className={"z-10"}>
          <div className={"relative mb-20"}>
            <nav
              className={
                "relative flex w-full items-center justify-between py-24 font-semibold lg:text-2xl xl:text-3xl"
              }>
              <button onClick={handleBack}>
                <CircleArrowLeft strokeWidth={1} size={35} color={"#9C9C9C"} />
              </button>
              <div className={"flex flex-grow justify-center"}>
                <div className={"flex items-center gap-x-16"}>
                  {aboutUsNavLinks.map((eachNav, index) => (
                    <button
                      onClick={(e) => handleSmoothScroll(e, eachNav.href.substring(1))}
                      role={"link"}
                      className={
                        "cursor-pointer !scroll-smooth transition-all duration-300 ease-linear hover:text-[#7670CE]"
                      }
                      key={index}>
                      {eachNav.name}
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            <div className={"z-10 flex flex-col gap-y-2"}>
              <h6 className={"text-sm font-light"}>About us</h6>
              <h2 className={"w-[50%] font-semibold !leading-normal lg:text-3xl xl:text-4xl"}>
                We believe in
                <span className={"text-[#7670CE]"}>
                  {" "}
                  ‘Crafting Innovative Solutions for a Digital Future.’
                </span>
              </h2>
            </div>
            <div className={"z-20 flex flex-col gap-y-6 lg:mt-5 xl:mt-10"}>
              <p
                className={"font-extralight !leading-relaxed lg:text-base xl:text-xl 2xl:text-3xl"}>
                At Kaliper Technologies, we believe in transforming possibilities into lasting,
                delightful experiences. Founded in 2023, we are a forward-thinking IT consulting
                firm specializing in data engineering, analytics, artificial intelligence, as well
                as web, mobile app, and UI/UX development. Our innovative solutions empower
                businesses to turn data into actionable insights while delivering seamless digital
                experiences across platforms.
              </p>
              <p
                className={"font-extralight !leading-relaxed lg:text-base xl:text-xl 2xl:text-3xl"}>
                Our expert team excels in systems architecture, process optimization, and custom
                development, delivering innovative solutions tailored to the unique challenges of
                each client. From AI-driven insights to scalable enterprise solutions, we are
                dedicated to helping organizations navigate the complexities of today’s digital
                landscape, achieving sustainable growth and long-term success.
              </p>
              <p
                className={
                  "text-center font-semibold !leading-relaxed text-[#7670CE] lg:my-3 lg:text-2xl xl:my-6 xl:text-3xl 2xl:my-10 2xl:text-4xl"
                }>
                ‘With Kaliper Technologies as your trusted partner, your digital transformation
                journey is in expert hands.’
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
      <Footer />
    </>
  );
};

export default AboutUs;
