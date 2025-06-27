"use client";
import { Footer } from "@/app/(home)/_components/footer";
import { ProjectDescription } from "@/app/(projects)/_components/project-description";
import { CircleArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
            Framejar - Simplifying Content Creation
          </h1>
          <h2 className="text-[28px] text-[#ECECEC]">
            Framejar is an all-in-one, innovative platform built to simplify and enhance the content
            creation process.
          </h2>
        </div>
        <Image
          src="/png/framejar.png"
          width={1200}
          height={1200}
          alt="candvue"
          className="2xl:px-15 px-5 lg:mb-14 lg:px-10 xl:mb-20"
        />

        <ProjectDescription
          briefContent={
            "Framejar streamlines content creation with tools and professional editors, helping marketers and creators produce high-quality videos and visuals quickly."
          }
          discoverContent={
            "Framejar connects users with professional creators, providing tools to turn ideas into engaging, high-quality content—ideal for marketers, creators, and businesses in today’s digital world."
          }
          defineContent={
            "Framejar is an innovative platform that boosts creativity with tools and access to professionals, helping users create high-quality content for marketers, creators, and businesses."
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
