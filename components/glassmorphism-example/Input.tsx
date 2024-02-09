"use client";

import React, { useState } from "react";
import Input from "../lab/input/InputSpotlightBorder";

type Props = {};

const InputExample = (props: Props) => {
  const [value, setValue] = useState("");
  return (
    <Input type="text" value={value} setValue={setValue} placeholder="Input" />
  );
};

export default InputExample;
