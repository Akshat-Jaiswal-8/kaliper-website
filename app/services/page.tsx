import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { services } from "@/app/services/constant";
import Link from "next/link";

const Page = () => {
  return (
    <div className="relative mx-auto overflow-hidden">
      <div className="absolute -top-20 h-[20%] w-[40rem] rounded-full bg-[#0F151A] bg-opacity-70 blur-3xl lg:left-[22%] xl:left-[28%]" />
      <div className="absolute -left-20 top-[20%] h-[40%] w-[80%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <div className={"relative z-10 px-5 text-white lg:px-40 lg:py-20"}>
        <h2 className="mx-auto max-w-screen-xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text py-2 font-montserrat font-bold text-transparent lg:text-6xl">
          Our Services
        </h2>
        <h2 className="mx-auto mb-4 mt-10 max-w-screen-xl text-xl font-semibold lg:text-4xl">
          Innovative IT Solutions
        </h2>
        <p className="mx-auto mb-8 max-w-screen-xl font-semibold lg:text-4xl">
          Expert Consulting for Your Business Growth.
        </p>
        <p className="mx-auto mb-8 mt-8 max-w-screen-xl text-[20px] font-extralight text-[#ECECEC]">
          We provide tailored IT consulting services designed to meet your business&apos;s unique
          needs. With expertise across industries, we deliver innovative solutions that drive
          efficiency, scalability, and growth. Whether it&apos;s technology strategy,
          implementation, or optimization, we’re here to support your success.
        </p>
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 gap-y-16 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="mx-auto flex h-[300px] flex-col rounded-2xl border-gray-800 bg-transparent p-5 shadow-lg lg:max-w-xs">
              <div className="flex items-center justify-between">
                <h3 className="mt-10 text-lg font-bold text-white">{service.title}</h3>
                <Image
                  width={96}
                  height={96}
                  src={service.imgSrc}
                  alt={service.title}
                  className="mb-4 h-24 w-24"
                />
              </div>
              <div className="flex-grow">
                <p className="mt-2 text-sm font-thin text-[#ECECEC]">{service.description}</p>
              </div>
              <div className="mt-auto flex justify-end">
                <Link
                  href={"/lets-talk"}
                  className="shadow-b rounded border-[1px] border-white bg-transparent px-4 py-2 text-white transition duration-300 hover:border-[#153982] hover:bg-[#153982] hover:shadow">
                  Let&apos;s Talk
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="relative mx-auto max-w-6xl">
            <div className="absolute mx-auto h-full w-full rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
            <div className={"relative z-10"}>
              <p className="text-white lg:text-5xl">
                Turning Ideas Into Impactful Design Solutions
              </p>
              <p className="mt-10 font-montserrat font-thin text-[#ECECEC] lg:text-lg">
                We transform complex challenges into intuitive and engaging user experiences. Our
                expertise in design turns abstract concepts into clear, effective solutions that
                drive business results.
              </p>
            </div>
          </div>

          <div className="relative mx-auto mt-20 w-[80%]">
            <div className="absolute -left-[25rem] bottom-16 h-[80%] w-[80%] rounded-br-full rounded-tr-full bg-[#8AA2D0] bg-opacity-30 blur-[12rem]" />
            <div className={"relative z-10 flex flex-col justify-center"}>
              <div className="mx-auto mt-10 flex flex-col gap-20 lg:flex-row">
                <div className="flex max-w-lg flex-col">
                  <p className="font-semibold lg:text-4xl">Innovative Design & Technology</p>
                  <p className="mt-10 font-montserrat font-thin lg:text-lg">
                    We craft cutting-edge solutions that push technological boundaries and connect
                    businesses with lasting impact.
                  </p>
                </div>
                <div className="flex max-w-lg flex-col">
                  <p className="font-semibold lg:text-4xl">Tailored Approach</p>
                  <p className="mt-10 font-montserrat font-thin lg:text-lg">
                    Our flexible consulting process adapts to the unique needs of each project,
                    ensuring the best strategies and outcomes.
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-24 flex flex-col gap-20 lg:flex-row">
                <div className="flex max-w-lg flex-col">
                  <p className="font-semibold lg:text-4xl">Ethics & Integrity</p>
                  <p className="mt-10 font-montserrat font-thin lg:text-lg">
                    We prioritize ethical practices and ensure our solutions are inclusive and
                    accessible, providing equal opportunities for all.
                  </p>
                </div>
                <div className="flex max-w-lg flex-col">
                  <p className="font-semibold lg:text-4xl">Proven Expertise Across Industries</p>
                  <p className="mt-10 font-montserrat font-thin lg:text-lg">
                    With years of experience, Kaliper Technologies is the trusted partner for
                    delivering successful IT solutions across a variety of industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
