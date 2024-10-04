import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { projects } from "@/app/about-us/constant";

export const Projects = () => {
  return (
    <section className={"container mx-auto h-full w-[80%]"}>
      <h1 className={"font-semibold lg:text-3xl xl:text-4xl"}>Our Projects</h1>
      <p className={"mt-10 font-normal lg:text-2xl xl:text-3xl"}>
        We provide solutions that address complex business challenges and deliver measurable
        outcomes. Each project highlights our expertise in IT consulting, system integration, and
        digital transformation across diverse industries.
      </p>

      <div className={"mx-auto mt-32"}>
        {projects.map((eachProject, index) => (
          <div className={"mb-32"} key={index}>
            <Image
              src={eachProject.src}
              width={1200}
              height={1200}
              alt={eachProject.href.split("/")[1]}
            />
            <p className={"mt-20 font-normal leading-normal text-[#ECECEC] lg:text-xl xl:text-2xl"}>
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
        ))}
      </div>
    </section>
  );
};
