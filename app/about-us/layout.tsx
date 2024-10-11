import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={"scroll-smooth bg-[#171717]"}>{children}</div>;
};

export default Layout;
