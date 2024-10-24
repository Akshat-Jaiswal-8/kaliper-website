"use client";
import Image from "next/image";
import React from "react";
import { Footer } from "@/app/(home)/_components/footer";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProjectDescription } from "@/app/(projects)/_components/project-description";

const Page = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <main className="relative overflow-hidden">
      <div className="absolute -top-[25rem] left-[25%] h-[40%] w-[40%] rounded-full bg-[#0F151A] bg-opacity-50 blur-[70px]" />
      <div className="absolute -top-[25rem] left-[25%] h-[40%] w-[40%] rounded-full bg-[#8AA2D0] bg-opacity-30 blur-[10rem]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[15rem]" />
      <div className="absolute -left-20 top-60 h-[50%] w-[80%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <button aria-label={"Back"} onClick={handleBack}>
        <CircleArrowLeft strokeWidth={1} size={35} className={"mx-8 mt-8"} color={"#9C9C9C"} />
      </button>
      <div className={"container relative z-10 mx-auto flex flex-col items-center"}>
        <div className="2xl:py-25 space-y-5 py-10 lg:py-20">
          <h1 className="text-[45px] font-bold text-[#7670CE]">
            Pet Clinic Management System - Streamlined Care for Your Furry Friends
          </h1>
          <h2 className="text-[28px] text-[#ECECEC]">
            The Pet Clinic Management System is a comprehensive software solution designed to help
            veterinary clinics manage their operations efficiently.
          </h2>
        </div>
        <Image
          src="/png/pet-clinic.png"
          width={1200}
          height={1200}
          alt="candvue"
          className="2xl:px-15 px-5 lg:mb-14 lg:px-10 xl:mb-20"
        />
        <ProjectDescription
          briefContent={
            "This system streamlines pet care operations with features for scheduling, patient management, medical records, billing, and inventory tracking."
          }
          discoverContent={
            "Designed for pet care providers, it offers tools for booking appointments, managing patient records, and tracking inventory, ensuring seamless communication and efficient workflow."
          }
          defineContent={
            "A comprehensive solution that simplifies appointment scheduling, consolidates medical records, and optimizes inventory management, while enhancing client communication for better service."
          }
        />
      </div>
      <div className={"mt-20"}>
        <Footer />
      </div>
    </main>
  );
};

export default Page;
