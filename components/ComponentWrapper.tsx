import React from "react";

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[200px] overflow-hidden relative rounded-md bg-black border border-gray-900 p-8 flex items-center justify-center">
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      <div className="z-10">{children}</div>
    </div>
  );
};

export default ComponentWrapper;
