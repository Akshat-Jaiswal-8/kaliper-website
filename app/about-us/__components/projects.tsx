"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { projects } from "@/app/about-us/constant";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const gradientVariants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};
const gradientTransition = { delay: 0.4, duration: 0.3 };

export const Projects = () => {
  return (
    <section id={"projects"} className={"mx-auto h-full w-[70%]"}>
      <h1 className={"font-semibold lg:text-3xl xl:text-4xl"}>Our Projects</h1>
      <p className={"mt-10 font-normal lg:text-2xl xl:text-3xl"}>
        We provide solutions that address complex business challenges and deliver measurable
        outcomes. Each project highlights our expertise in IT consulting, system integration, and
        digital transformation across diverse industries.
      </p>

      <div className={"mx-auto mt-32"}>
        {projects.map((eachProject, index) => (
          <div className={"relative mt-32 last:pb-10"} key={index}>
            {index > 0 && (
              <motion.div
                variants={gradientVariants}
                initial="hidden"
                whileInView="visible"
                transition={gradientTransition}
                className={cn(
                  "absolute h-[80%] w-[50%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[20rem]",
                  index === 4 ? "-right-10" : "-left-44",
                )}
              />
            )}
            <div className={"relative z-20"}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}>
                <Link href={eachProject.href}>
                  <Image
                    src={eachProject.src}
                    width={1200}
                    height={1200}
                    alt={eachProject.href.split("/")[1]}
                  />
                </Link>
              </motion.div>
              <p
                className={
                  "mt-20 font-normal leading-normal text-[#ECECEC] lg:text-xl xl:text-2xl"
                }>
                {eachProject.content}
              </p>
              <Link
                className={
                  "mr-10 mt-10 flex items-center justify-end gap-x-2 text-end text-[#7670CE]"
                }
                href={eachProject.href}>
                View Project <ChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
