import Sidebar from "@/components/Sidebar";
import React from "react";
import beams from "@/public/beams.png";
import grid from "@/public/grid.svg";

const DocsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="flex container mx-auto pt-28 pb-28 relative z-50 bg-transparent">
        <Sidebar />
        {children}
      </main>
      <div
        style={{ backgroundImage: `url(${beams.src})` }}
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"></div>
      <div
        style={{ backgroundImage: `url(${grid.src})` }}
        className="absolute top-0 left-0 h-full w-full  [background-position:calc(100%+5px)_calc(100%+5px)]"></div>
    </>
  );
};

export default DocsLayout;
