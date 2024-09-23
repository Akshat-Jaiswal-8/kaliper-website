import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Blogs = () => {
  return (
    <section className={"container mx-auto mt-14"}>
      <div className={"flex flex-col items-center gap-y-4"}>
        <h1 className={"text-4xl"}>Latest Blog</h1>
        <p className={"text-lg"}>
          Insightful articles and update latest trends in project management.
        </p>
      </div>
      <div className={"mx-auto mt-10 items-center"}>
        <div
          className={
            "relative mx-auto flex h-[30rem] w-[30%] flex-col justify-between rounded-xl border border-gray-700"
          }>
          <Image height={800} width={800} src={"/card-background.png"} alt={"card-background"} />
          <div className={"font-inter bottom-0 mx-4 my-6"}>
            <h2 className={"font-semibold"}>
              How Digital Transformation is Shaping Businesses in 2024
            </h2>
            <p className={"mt-5 flex justify-between text-sm font-semibold text-slate-400"}>
              <span>Apr 19, 2024</span>
              <span className={"flex gap-x-1"}>
                Read More{" "}
                <span>
                  <ArrowRight />
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <button
        className={
          "mx-auto mt-10 flex justify-center rounded-full border border-[#E6E6E60D] bg-[#E6E6E60D] px-4 py-3"
        }>
        <Link className={"font-inter"} href={"/"}>
          More Articles
        </Link>
      </button>
    </section>
  );
};
