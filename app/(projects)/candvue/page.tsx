import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute -top-44 left-[25%] h-[40%] w-[40%] rounded-full bg-[#0F151A] bg-opacity-50 blur-[70px]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
      <div className="absolute -right-52 top-[20%] h-[30%] w-[30%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[15rem]" />
      <div className="absolute -left-20 top-60 h-[50%] w-[80%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />

      <div className={"container relative z-10 mx-auto flex w-[85%] flex-col items-center"}>
        <div className="2xl:py-25 space-y-5 py-10 lg:py-20">
          <h1 className="text-[45px] font-bold text-[#7670CE]">
            Candvue: Streamlining Candidate Screening at Scale
          </h1>
          <h2 className="text-[28px] text-[#ECECEC]">
            Candvue is the affordable solution for screening candidates at scale. Traditional hiring
            methods are often costly and time-consuming. With Candvue, you can drastically reduce
            your hiring overhead while enhancing the efficiency of your recruitment proces
          </h2>
        </div>
        <Image
          src="/png/candvue.png"
          width={1200}
          height={1200}
          alt="candvue"
          className="2xl:px-15 px-5 lg:px-10"
        />
        <article className="py-20">
          <div className="relative text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
            <div className="absolute -left-20 top-20 h-[20%] w-[110%] rounded-full bg-[#0F151A] bg-opacity-70 blur-[70px]" />
            <div className="absolute -bottom-72 -left-48 h-[80%] w-[30%] rounded-tr-full bg-[#8AA2D0] bg-opacity-50 blur-[15rem]" />
            <p className={"relative z-10"}>
              Hiring the right talent is crucial, but traditional recruitment methods can be slow
              and expensive. Candvue transforms your hiring process with an efficient,
              cost-effective solution for candidate screening at scale.
            </p>

            <br />
            <p className="relative z-10 text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              Candvue is the affordable solution for screening candidates at scale. Traditional
              hiring methods are often costly and time-consuming. With Candvue, you can drastically
              reduce your hiring overhead while enhancing the efficiency of your recruitment
              process.
            </p>
            <br />
            <p className="relative z-10 text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              Our smart candidate screening software allows you to evaluate candidates faster,
              without compromising on quality, so you can focus on what matters most—hiring the
              right talent.
            </p>
            <br />
            <p className="relative z-10 text-[36px] font-extralight leading-[54px] text-[#ECECEC]">
              Save valuable time, cut down costs, and elevate your hiring strategy with Candvue.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default page;
