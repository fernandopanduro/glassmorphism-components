import React from "react";

type Props = {
  elementToHover: React.ReactNode;
  tooltip: React.ReactNode;
};

const Tooltip = ({ elementToHover, tooltip }: Props) => {
  return (
    <div className="group relative inline-block w-28 cursor-default text-center font-bold">
      {elementToHover}
      <div className="pointer-events-none absolute -left-1/2 bottom-8 z-10 ml-14 w-28 rounded-md border-r border-b border-white/20 bg-white/05 backdrop-blur-sm px-3 py-2 text-center text-xs opacity-0 transition-all group-hover:opacity-100">
        {tooltip}
      </div>
    </div>
  );
};

export default Tooltip;
