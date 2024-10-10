import React from "react";
import MapComponent from "@/app/(home)/_components/map";
import { Faqs } from "@/app/(home)/_components/faqs";

export const Address = (): React.ReactNode => {
  return (
    <section className={"mx-auto my-20 flex w-[90%] gap-x-16 px-6 py-6"}>
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
              <a href="mailto:amit.verma@kaliper.in">amit.verma@kaliper.in</a>
            </div>
          </div>
          <div>
            <h3 className={"mb-2 font-semibold"}>Contact</h3>
            <div className={"flex gap-x-4"}>
              <span>+91 8299513060</span>
              <span>+91 7838712954</span>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
    </section>
  );
};
