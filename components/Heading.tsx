import React from "react";

type Props = {
  text: string;
};

const Heading = ({ text }: Props) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight capitalize">
      {text}
    </h1>
  );
};

export default Heading;
