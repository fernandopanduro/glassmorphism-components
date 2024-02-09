import React from "react";

type Props = {
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

const Input = ({ type, value, setValue, placeholder }: Props) => {
  return (
    <input
      className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
      type={type}
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
      placeholder={placeholder}
      aria-label={placeholder}
    />
  );
};

export default Input;
