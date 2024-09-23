"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section>
      <motion.div
        className={
          "absolute left-[30rem] top-[-142px] h-[30rem] w-[395px] rotate-45 rounded-full bg-[#8AA2D080] opacity-50 blur-3xl"
        }></motion.div>
      <div className="mb-20 h-[calc(100vh-6rem)] w-full bg-hero-background bg-center">
        <div className="hero-gradient left-[10%] mx-auto flex h-[80vh] w-[95vw] flex-col rounded-xl text-center">
          <div className={"flex w-full flex-col gap-y-10"}>
            <h1 className="mx-auto mt-10 w-2/4 text-center text-5xl font-bold leading-normal text-slate-100">
              Transforming ideas <p>into impact, you trusted</p>
            </h1>
            <h1
              className={
                "mx-auto w-2/3 bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text py-2 pl-20 text-center text-7xl font-bold text-transparent"
              }>
              IT Consulting Partner
            </h1>
          </div>
          <div className={"mt-20"}>
            <button className={"rounded-full border border-white/10 p-6"}>
              <Link className={"text-2xl"} href={"/"}>
                Connect with us
              </Link>
            </button>
            <div className={"mt-10 flex justify-center gap-x-16 text-center"}>
              <div>
                Projects
                <p className={"mt-2 text-7xl font-extralight"}>01</p>
              </div>
              <div>
                Clients
                <p className={"mt-2 text-7xl font-extralight"}>01</p>
              </div>
              <div>
                Services
                <p className={"mt-2 text-7xl font-extralight"}>01</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"container mx-auto mt-10 flex w-full flex-col gap-y-10 text-[#D9D9D9]"}>
          <h1 className={"text-center text-4xl font-semibold"}>
            From building concept to launch we can help you at Every Stage
          </h1>
          <p className={"mx-auto w-[90%] text-center text-lg leading-normal"}>
            We guide you through every stage of your project, from the initial concept to the final
            launch. Our expert team is dedicated to providing tailored solutions, ensuring a smooth
            process and successful outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
