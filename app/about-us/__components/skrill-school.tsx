"use client";
import Image from "next/image";
import React from "react";
import { Footer } from "@/app/(home)/_components/footer";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const SkrillSchool = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <main className="relative h-full w-full overflow-hidden">
      <div className="absolute -top-[25rem] left-[25%] h-[40%] w-[40%] rounded-full bg-[#0F151A] bg-opacity-50 blur-[70px]" />
      <div className="absolute -top-[25rem] left-[25%] h-[40%] w-[40%] rounded-full bg-[#8AA2D0] bg-opacity-30 blur-[10rem]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[15rem]" />
      <div className="absolute -left-20 top-60 h-[50%] w-[80%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <button onClick={handleBack}>
        <CircleArrowLeft strokeWidth={1} size={35} className={"mx-8 mt-8"} color={"#9C9C9C"} />
      </button>
      <div className={"container relative z-10 mx-auto flex w-[85%] flex-col items-center"}>
        <div className="2xl:py-25 space-y-5 lg:py-10">
          <h1 className="text-[45px] font-bold text-[#7670CE]">
            Skrill School - Empowering the Next Generation of Tech Talent{" "}
          </h1>
          <h2 className="text-[28px] text-[#ECECEC]">
            At Skrill School, we are committed to providing high-quality tech education to students
            in tier 2 and 3 cities. Our mission is to equip you with the essential skills needed to
            launch a successful career in technology.
          </h2>
        </div>
        <Image
          src="/png/skrill-school.png"
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
              Empowering the Next Generation of Tech Talent.
            </p>
            <br />
            <ul className="relative z-10 list-disc text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              <li>
                Comprehensive Curriculum: Our courses are designed to provide a solid foundation in
                front-end development, UI/UX design, data science, and more. We focus on practical
                skills that are highly relevant in today’s job market.
              </li>
              <br />
              <li>
                Accessible Education: We bring top-tier tech education to students in areas that
                traditionally have limited access to such resources. Our online learning platform
                ensures that location is never a barrier.
              </li>
              <br />
              <li>
                Affordable Programs: We are dedicated to making quality education affordable. Our
                cost-effective courses and flexible payment plans ensure that everyone can learn and
                succeed.
              </li>
              <br />
              <li>
                Experienced Instructors: Learn from industry experts with years of experience in
                their fields. Our instructors bring real-world knowledge, providing you with
                insights that go beyond the classroom.
              </li>
              <br />
              <li>
                Hands-On Projects: Apply what you learn with practical, real-world projects. Our
                curriculum emphasizes hands-on learning so you can build a portfolio of work that
                showcases your skills to potential employers.
              </li>
              <br />
              <li>
                Career Support: From resume-building workshops to job interview preparation, we
                offer ongoing support to help you land your first job in tech. Our placement
                assistance ensures you are ready to step confidently into your new career.
              </li>
            </ul>
            <br />
            <p className="text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              We empower the next generation of talent to thrive in the ever-evolving tech industry.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
};
