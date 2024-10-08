import React from "react";
import { CircleX } from "lucide-react";

const Hamburger = () => {
  return (
    <section className={"flex h-screen w-screen overflow-hidden"}>
      <div className={"h-full w-[45%] bg-[#7670CE] text-black"}>
        <div className={"m-auto flex h-full w-[90%] flex-col justify-center gap-y-16"}>
          <p className={"text-2xl font-semibold"}>Got an idea?</p>
          <h1 className={"text-start font-bold lg:text-4xl xl:text-5xl"}>
            Let&apos;s craft brilliance together
          </h1>
          <button
            className={
              "mx-auto w-1/2 rounded-2xl border-2 border-black text-2xl font-bold lg:p-3 xl:p-4"
            }>
            Get in touch
          </button>
        </div>
      </div>
      <div className={"relative h-full flex-grow bg-[#0F151A]"}>
        <div className="absolute -top-20 h-[60%] w-[50%] rounded-full bg-[#0F151A] bg-opacity-70 blur-3xl lg:left-[22%] xl:left-[28%]" />
        <div className="absolute -top-20 h-[60%] w-[50%] rounded-full bg-[#8AA2D0] bg-opacity-20 blur-3xl lg:left-[22%] xl:left-[28%]" />

        <div className={"flex h-[5%] justify-end px-16 py-8"}>
          <CircleX className={"text-end"} strokeWidth={0.75} size={32} />
        </div>
        <div className={"relative z-10 flex h-[95%] items-center justify-around gap-x-2"}>
          <div className={"flex flex-col gap-y-8 font-bold lg:text-4xl xl:text-5xl"}>
            <p>Home</p>
            <p>Services</p>
            <p>Industries</p>
            <p>Contact Us</p>
          </div>
          <div className={"flex flex-col gap-y-6 font-light lg:text-xl xl:text-2xl"}>
            <h3 className={"font-bold"}>Customer we serve</h3>
            <p>Startups</p>
            <p>Small & medium</p>
            <p>Enterprises</p>
            <p>Large Enterprises</p>
            <p>Non profit organisation</p>
            <p>Government agencies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hamburger;
