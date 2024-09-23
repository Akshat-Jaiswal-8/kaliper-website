import React from "react";
import { features } from "@/app/(home)/constant";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Features = () => {
  return (
    <section className="mt-[15rem] h-full w-full">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col">
            {features.slice(0, 3).map((eachFeature, index) => (
              <div key={index} className="relative my-20">
                <Image
                  height={500}
                  width={500}
                  className="relative rotate-180"
                  src="/features-border.svg"
                  alt="feature border"
                />
                <div className="absolute inset-0 flex justify-end">
                  <div className={"absolute right-32 top-2 flex flex-col text-xs"}>
                    <span className="my-4 text-end text-sm font-semibold">{eachFeature.title}</span>
                    <span className="px-4 text-end text-gray-300">{eachFeature.description}</span>
                  </div>
                  <div>
                    <img
                      src={"/feature-icon-background.png"}
                      className={"absolute right-5 top-4 h-28 w-28 rounded-full opacity-20"}
                    />
                    <img
                      className={"absolute right-10 top-6 h-20 w-20"}
                      src={eachFeature.icon}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {features.slice(3, 6).map((eachFeature, index) => (
              <div key={index} className={cn("relative my-20", index === 0 && "mt-0")}>
                <Image
                  height={500}
                  width={500}
                  className="relative"
                  src="/features-border.svg"
                  alt="feature border"
                />
                <div>
                  <img
                    src={"/feature-icon-background.png"}
                    className={"absolute left-8 top-4 h-28 w-28 rounded-full opacity-20"}
                  />
                  <img
                    className={"absolute left-10 top-7 h-20 w-20"}
                    src={eachFeature.icon}
                    alt="icon"
                  />
                </div>
                <div className="absolute inset-0 flex justify-end">
                  <div className={"absolute left-32 top-2 flex flex-col text-xs"}>
                    <span className="my-4 text-start text-sm font-semibold">
                      {eachFeature.title}
                    </span>
                    <span className="px-4 text-start text-gray-300">{eachFeature.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
