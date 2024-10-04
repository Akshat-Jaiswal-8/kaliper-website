import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={"h-screen w-screen overflow-scroll bg-[#0F151A]"}>{children}</div>;
};

export default Layout;
