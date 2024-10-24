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
    <main className="relative h-full w-full overflow-hidden">
      <div className="absolute -top-[25rem] left-[25%] h-[40%] w-[40%] rounded-full bg-[#0F151A] bg-opacity-50 blur-[70px]" />
      <div className="absolute -top-[25rem] left-[25%] h-[40%] w-[40%] rounded-full bg-[#8AA2D0] bg-opacity-30 blur-[10rem]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[15rem]" />
      <div className="absolute -left-20 top-60 h-[50%] w-[80%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <button aria-label={"Back"} onClick={handleBack}>
        <CircleArrowLeft strokeWidth={1} size={35} className={"mx-8 mt-8"} color={"#9C9C9C"} />
      </button>
      <div className={"container relative z-10 mx-auto flex flex-col items-center"}>
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
          className="2xl:px-15 px-5 lg:mb-14 lg:px-10 xl:mb-20"
        />
        <ProjectDescription
          briefContent={
            "Our tech education platform offers comprehensive courses in front-end development, UI/UX design, data science, and more, with a focus on practical skills and career readiness."
          }
          discoverContent={
            "We provide accessible and affordable education, offering online courses that reach students regardless of location. With experienced instructors and hands-on projects, learners gain real-world skills and build a strong portfolio."
          }
          defineContent={
            "Platform offers quality tech education with a strong curriculum, practical projects, and career support, preparing students for success in the tech industry."
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
