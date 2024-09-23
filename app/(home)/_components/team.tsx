import React from "react";

export const Team = () => {
  return (
    <section className={"mt-20"}>
      <div className="mb-20 h-[calc(100vh-6rem)] w-full">
        <div className="hero-gradient left-[10%] mx-auto flex h-[80vh] w-[95vw] flex-col rounded-xl text-center">
          <div className={"flex w-full flex-col gap-y-4"}>
            <h3 className="mx-auto mt-10 text-center font-montserrat text-xl text-slate-100 text-opacity-85">
              Team Section
            </h3>
            <h1 className={"mx-auto w-2/3 text-center text-6xl font-bold"}>Meet the team</h1>
            <h2 className={"mx-auto text-center text-3xl text-[#797979]"}>
              Meet our team of professionals to serve you
            </h2>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
