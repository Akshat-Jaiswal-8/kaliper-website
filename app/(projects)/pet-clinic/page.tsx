import Image from "next/image";
import React from "react";
import { Footer } from "@/app/(home)/_components/footer";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute -top-[25rem] left-[25%] h-[40%] w-[40%] rounded-full bg-[#0F151A] bg-opacity-50 blur-[70px]" />
      <div className="absolute -top-[25rem] left-[25%] h-[40%] w-[40%] rounded-full bg-[#8AA2D0] bg-opacity-30 blur-[10rem]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[15rem]" />
      <div className="absolute -left-20 top-60 h-[50%] w-[80%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <Link href={"/about-us"}>
        <CircleArrowLeft strokeWidth={1} size={35} className={"mx-8 mt-8"} color={"#9C9C9C"} />
      </Link>
      <div className={"container relative z-10 mx-auto flex w-[85%] flex-col items-center"}>
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
          className="2xl:px-15 px-5 lg:px-10"
        />
        <article className="py-20">
          <div className="relative text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
            <div className="absolute -left-20 top-20 h-[20%] w-[110%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
            <div className="absolute -bottom-72 -left-48 h-[80%] w-[30%] rounded-tr-full bg-[#8AA2D0] bg-opacity-50 blur-[15rem]" />
            <p className="relative z-10 text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              With features tailored for pet care providers, this system simplifies appointment
              scheduling, patient management, medical records, billing, and inventory tracking.
            </p>
            <br />
            <ul className="relative z-10 list-disc text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              <li>
                Appointment Scheduling: Easily book, reschedule, and manage appointments with pet
                owners, ensuring optimal time management for staff.
              </li>
              <br />
              <li>
                Medical Records Management: Keep detailed medical histories for pets, including
                vaccination records, treatments, and prescriptions, all in one secure place.
              </li>
              <br />
              <li>
                Inventory Management: Track medications, supplies, and products to maintain adequate
                stock levels and streamline ordering processes.
              </li>
              <br />
              <li>
                Client Communication: Enhance client relationships with reminders, follow-ups, and
                easy access to information.
              </li>
            </ul>
            <br />
            <p className="text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              Ensure quality care for pets while optimizing clinic operations with the Pet Clinic
              Management System!
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default page;
