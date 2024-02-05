import React, { MouseEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className="relative group flex items-center capitalize bg-white/5 text-white backdrop-blur-lg px-4 py-2 rounded-md border-b border-r border-white/15 transition-all overflow-hidden w-max"
      onClick={onClick}>
      {children}
      <span className="before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-gradient-to-l before:from-white/10 before:to-transparent before:skew-x-[45deg] before:transition-all before:translate-x-0 group-hover:before:translate-x-[200%]"></span>
    </button>
  );
};

export default Button;
