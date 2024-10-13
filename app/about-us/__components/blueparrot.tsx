"use client";
import Image from "next/image";
import React from "react";
import { Footer } from "@/app/(home)/_components/footer";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BlueParrot = () => {
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
      <button onClick={handleBack}>
        <CircleArrowLeft strokeWidth={1} size={35} className={"mx-8 mt-8"} color={"#9C9C9C"} />
      </button>
      <div className={"container relative z-10 mx-auto flex w-[85%] flex-col items-center"}>
        <div className="2xl:py-25 space-y-5 py-10 lg:py-20">
          <h1 className="text-[45px] font-bold text-[#7670CE]">
            BlueParrot.ai - Smart, Customized Messaging with AI
          </h1>
          <h2 className="text-[28px] text-[#ECECEC]">
            BlueParrot.ai is an innovative Chrome extension designed to simplify and enhance the way
            users create personalized messages.
          </h2>
        </div>
        <Image
          src="/png/blue-parrot.png"
          width={1200}
          height={1200}
          alt="blueparrot"
          className="2xl:px-15 px-5 lg:px-10"
        />
        <article className="py-20">
          <div className="relative text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
            <div className="absolute -left-20 top-20 h-[20%] w-[110%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
            <div className="absolute -bottom-72 -left-48 h-[80%] w-[30%] rounded-tr-full bg-[#8AA2D0] bg-opacity-50 blur-[15rem]" />
            <p className={"relative z-10"}>
              Powered by Kaliper’s proprietary generative AI, BlueParrot.ai allows users to generate
              customized messages with just a brief prompt, making communication faster, more
              efficient, and more meaningful.
            </p>

            <br />
            <p className="relative z-10 text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              With BlueParrot.ai, the message template is dynamic and continuously adapts as you
              interact with profiles online. Whether you’re sending an email, responding on social
              media, or connecting on professional platforms, our tool seamlessly updates the
              content based on the specific context, ensuring your communication is always tailored
              to the recipient.
            </p>
            <br />
            <p className="relative z-10 text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              Unlock the power of personalized messaging and transform the way you communicate –
              effortlessly, intelligently, and in real-time.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
};
