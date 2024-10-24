import React from "react";
import Image from "next/image";

type ProjectDescription = {
  briefContent: string;
  discoverContent: string;
  defineContent: string;
};

export const ProjectDescription = ({
  briefContent,
  discoverContent,
  defineContent,
}: ProjectDescription): React.ReactNode => {
  return (
    <div className={"container relative z-10 mx-auto grid grid-cols-3 gap-x-8"}>
      <div>
        <div className={"mb-4 flex items-center gap-x-6"}>
          <Image
            src={"/svg/brief.svg"}
            alt={"brief icon"}
            height={61}
            width={67}
            className={"lg:h-[3rem] lg:w-[2.5rem] xl:h-[3rem] xl:w-[4.2rem]"}
          />
          <h2 className={"font-semibold lg:text-3xl xl:text-4xl"}>BRIEF</h2>
        </div>
        <div
          className={"flex items-center justify-between font-extralight lg:text-base xl:text-lg"}>
          <span className={"pr-6"}>{briefContent}</span>
          <p className={"h-[236px] border-r-[1px] border-white border-opacity-60"} />
        </div>
      </div>
      <div>
        <div className={"mb-4 flex items-center gap-x-4"}>
          <Image
            src={"/svg/discover.svg"}
            alt={"discover icon"}
            height={61}
            width={67}
            className={"lg:h-[3rem] lg:w-[2.5rem] xl:h-[3rem] xl:w-[4.2rem]"}
          />
          <h2 className={"font-semibold lg:text-3xl xl:text-4xl"}>DISCOVER</h2>
        </div>
        <div
          className={"flex items-center justify-between font-extralight lg:text-base xl:text-lg"}>
          <span className={"pr-6"}>{discoverContent}</span>
          <p className={"h-[236px] border-r-[1px] border-white border-opacity-60"} />
        </div>
      </div>
      <div>
        <div className={"mb-4 flex items-center gap-x-6"}>
          <Image
            src={"/svg/define.svg"}
            alt={"define icon"}
            height={61}
            width={67}
            className={"lg:h-[3rem] lg:w-[2.5rem] xl:h-[3rem] xl:w-[4.2rem]"}
          />
          <h2 className={"font-semibold lg:text-3xl xl:text-4xl"}>DEFINE</h2>
        </div>
        <div
          className={"flex items-center justify-between font-extralight lg:text-base xl:text-lg"}>
          <span>{defineContent}</span>
          <p className={"h-[236px]"} />
        </div>
      </div>
    </div>
  );
};
