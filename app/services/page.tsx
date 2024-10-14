"use client";
import Image from "next/image";
import React from "react";
import { services } from "@/app/services/constant";
import Link from "next/link";
import { Footer } from "@/app/(home)/_components/footer";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const LayoutPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="container relative overflow-hidden">
      <div className="absolute -top-20 h-[20%] w-[40rem] rounded-full bg-[#0F151A] bg-opacity-70 blur-3xl lg:left-[22%] xl:left-[28%]" />
      <div className="absolute -top-52 h-[20%] w-[40rem] rounded-b-full bg-[#8AA2D0] bg-opacity-30 blur-[10rem] lg:left-[22%] xl:left-[28%]" />
      <div className="absolute -left-20 top-[20%] h-[40%] w-[80%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <button aria-label={"Back"} onClick={handleBack}>
        <CircleArrowLeft strokeWidth={1} size={35} className={"mt-10"} color={"#9C9C9C"} />
      </button>
      <div className={"relative z-10 my-20"}>
        <h2 className="mx-auto mb-10 bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent 2xl:text-6xl">
          Our Services
        </h2>

        <div className={"flex flex-col gap-y-4 text-4xl font-semibold text-[#ECECEC]"}>
          <h2>Innovative IT Solutions</h2>
          <h2>Expert Consulting for Your Business Growth.</h2>
        </div>
        <p className="mx-auto my-10 font-light !leading-normal text-[#ECECEC] lg:text-3xl xl:text-[2rem]">
          We provide tailored IT consulting services designed to meet your business&apos;s unique
          needs. With expertise across industries, we deliver innovative solutions that drive
          efficiency, scalability, and growth. Whether it&apos;s technology strategy,
          implementation, or optimization, we’re here to support your success.
        </p>
        <div className="mx-auto my-32 grid w-[90%] gap-14 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="mx-auto flex flex-col gap-y-2 rounded-2xl border border-[#415572] border-opacity-50 bg-transparent px-4 pb-4 pt-10 shadow-lg lg:h-52 lg:w-96 xl:h-52 xl:w-[22rem] 2xl:h-[15rem] 2xl:w-[30rem]">
              <div className="flex items-center justify-between">
                <h3 className="my-auto text-base font-medium text-white 2xl:text-lg">
                  {service.title}
                </h3>
                <Image
                  width={80}
                  height={60}
                  src={service.imgSrc}
                  alt={service.title}
                  className="lg:h-16 lg:w-20 2xl:h-20 2xl:w-24"
                />
              </div>
              <div>
                <p className="text-xs font-light text-[#ECECEC] 2xl:text-sm">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto flex justify-end">
                <Link
                  href={"/lets-talk"}
                  className="shadow-b rounded border-[0.5px] border-white px-2 py-1 text-xs text-white transition-all duration-300 hover:border-[#153982] hover:bg-[#153982] hover:shadow 2xl:text-sm">
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="relative mx-auto">
            <div className="absolute mx-auto h-full w-full rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
            <div className={"relative z-10"}>
              <p className="font-semibold !leading-normal text-white lg:text-4xl">
                Turning Ideas Into Impactful Design <br /> Solutions
              </p>
              <p className="mt-8 font-light !leading-normal text-[#ECECEC] lg:text-2xl">
                We transform complex challenges into intuitive and engaging user experiences. Our
                expertise in design turns abstract concepts into clear, effective solutions that
                drive business results.
              </p>
            </div>
          </div>

          <div className="relative mx-auto mt-20 w-[90%]">
            <div className="absolute -left-[25rem] bottom-16 h-[80%] w-[80%] rounded-br-full rounded-tr-full bg-[#8AA2D0] bg-opacity-30 blur-[12rem]" />
            <div className={"relative z-10 flex flex-col items-center gap-20"}>
              <div className="flex gap-x-10 xl:gap-x-20">
                <div className="flex max-w-md flex-col">
                  <p className="font-semibold lg:text-3xl xl:text-4xl">
                    Innovative Design & Technology
                  </p>
                  <p className="mt-12 font-light lg:text-lg">
                    We craft cutting-edge solutions that push technological boundaries and connect
                    businesses with lasting impact.
                  </p>
                </div>
                <div className="flex max-w-md flex-col">
                  <p className="font-semibold lg:text-3xl xl:text-4xl">Tailored Approach</p>
                  <p className="mt-20 font-light lg:text-lg">
                    Our flexible consulting process adapts to the unique needs of each project,
                    ensuring the best strategies and outcomes.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-10 xl:gap-x-20">
                <div className="flex max-w-md flex-col">
                  <p className="font-semibold lg:text-3xl xl:text-4xl">Ethics & Integrity</p>
                  <p className="mt-20 font-light lg:text-lg xl:text-xl">
                    We prioritize ethical practices and ensure our solutions are inclusive and
                    accessible, providing equal opportunities for all.
                  </p>
                </div>
                <div className="flex max-w-md flex-col">
                  <p className="font-semibold lg:text-3xl xl:text-4xl">
                    Proven Expertise Across Industries
                  </p>
                  <p className="mt-10 font-light lg:text-lg">
                    With years of experience, Kaliper Technologies is the trusted partner for
                    delivering successful IT solutions across a variety of industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPage;
