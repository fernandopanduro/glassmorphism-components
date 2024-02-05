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
      className="flex h-9 w-full rounded-md border border-white/05 bg-white/10 backdrop-blur-[2px] focus-visible:backdrop-blur-sm px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
