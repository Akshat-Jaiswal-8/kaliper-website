import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Blogs = (): React.ReactNode => {
  return (
    <section className={"mx-auto mt-14 w-[90%]"}>
      <div className={"flex flex-col items-center gap-y-4"}>
        <h1 className={"text-4xl"}>Latest Blog</h1>
        <p className={"text-lg"}>
          Insightful articles and update latest trends in project management.
        </p>
      </div>
      <div className={"my-20 flex items-center justify-between px-4"}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className={"mx-auto mt-10 items-center"}>
            <div
              className={cn(
                "relative mx-auto flex flex-col justify-between rounded-[20px] border-x border-b border-[#41557280] lg:max-w-[16rem] xl:max-w-xs",
                index === 3 % 2 && "scale-125",
              )}>
              <Image
                className={"rounded-[20px] border-t border-[#41557280]"}
                height={800}
                width={800}
                src={"/webp/card-background.webp"}
                alt={"card-background"}
              />
              <div className={"bottom-0 mx-4 my-6 font-inter"}>
                <h2 className={"text-sm font-semibold"}>
                  How Digital Transformation is Shaping Businesses in 2024
                </h2>
                <p
                  className={
                    "mt-5 flex items-center justify-between text-xs font-semibold text-slate-400"
                  }>
                  <span>Apr 19, 2024</span>
                  <span className={"flex items-center gap-x-1"}>
                    Read More
                    <span>
                      <ArrowRight />
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={
          "mx-auto mt-32 flex justify-center rounded-full border border-[#E6E6E60D] bg-[#E6E6E60D] px-4 py-2"
        }>
        <Link className={"font-inter"} href={"/"}>
          More Articles
        </Link>
      </button>
    </section>
  );
};
