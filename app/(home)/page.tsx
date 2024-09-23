import React from "react";
import { Hero } from "@/app/(home)/_components/hero";
import { Features } from "@/app/(home)/_components/features";
import { Blogs } from "@/app/(home)/_components/blogs";
import { Team } from "@/app/(home)/_components/team";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Blogs />
      <Team />
    </>
  );
};

export default HomePage;
