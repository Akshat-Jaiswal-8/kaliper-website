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
            HRMS (Human Resource Management System)
          </h1>
          <h2 className="text-[28px] text-[#ECECEC]">
            This emphasizes both optimization and overall improvement in HR management systems.
          </h2>
        </div>
        <Image
          src="/png/hrms.png"
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
              The HRMS is a robust software solution designed to streamline all aspects of human
              resource management within organizations. From recruitment to employee performance
              evaluation, this system provides comprehensive tools to manage your workforce
              effectively.
            </p>
            <br />
            <ul className="relative z-10 list-disc text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              <li>
                Employee Database: Maintain a centralized repository of employee records, including
                personal details, job history, and performance reviews.
              </li>
              <br />
              <li>
                Recruitment Management: Simplify the hiring process with tools for job posting,
                applicant tracking, and interview scheduling.
              </li>
              <br />
              <li>
                Payroll Management: Automate payroll processes to ensure timely and accurate
                employee compensation, including tax calculations and deductions.
              </li>
              <br />
              <li>
                Performance Management: Facilitate employee evaluations and feedback processes to
                support professional development and productivity.
              </li>
            </ul>
            <br />
            <p className="text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              Enhance your HR processes and empower your workforce with the HRMS!
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default page;
