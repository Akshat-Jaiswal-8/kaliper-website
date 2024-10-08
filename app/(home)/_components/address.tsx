import React from "react";
import MapComponent from "@/app/(home)/_components/map";
import Image from "next/image";
import { Faqs } from "@/app/(home)/_components/faqs";

export const Address = (): React.ReactNode => {
  return (
    <section className={"mx-auto my-20 flex w-[90%] items-center gap-x-16 px-6"}>
      <div className={"my-auto rounded-2xl border border-[#415572] border-opacity-50"}>
        <MapComponent />
        <div className={"mt-4 flex h-full flex-col gap-y-10 p-4"}>
          <div className={"flex flex-col gap-y-8 font-poppins"}>
            <div>
              <h3 className={"mb-2 font-semibold"}>Address</h3>
              <p>
                Plot No 38, Bhagwan Das, Alok Puri Kalyanpur Lko, Kalyanpur(Lucknow), Uttar Pradesh
                India 226022
              </p>
            </div>
            <div>
              <h3 className={"mb-2 font-semibold"}>Email</h3>
              <p>kaliper46@gmail.com</p>
            </div>
          </div>
          <div className={"flex flex-col gap-y-8 font-poppins"}>
            <div>
              <h3 className={"mb-2 font-semibold"}>Contact</h3>
              <div className={"flex gap-x-4"}>
                <span>+91 807655466</span>
                <span>+91 807655466</span>
              </div>
            </div>
            <div className={"w-[40%]"}>
              <h3 className={"mb-4 text-start font-semibold"}>Social Networking</h3>
              <div className={"flex gap-x-4"}>
                <Image src={"/svg/facebook.svg"} alt={"facebook"} height={20} width={20} />
                <Image src={"/svg/linkedin.svg"} alt={"linkedin"} height={20} width={20} />
                <Image src={"/svg/twitter.svg"} alt={"twitter"} height={15} width={15} />
                <Image src={"/svg/instagram.svg"} alt={"instagram"} height={20} width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
    </section>
  );
};
