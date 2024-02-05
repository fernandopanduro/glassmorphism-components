import React from "react";
import Tooltip from "../glassmorphism/Tooltip";

type Props = {};

const TooltipExample = (props: Props) => {
  return (
    <Tooltip elementToHover={<p>Hover Me</p>} tooltip={<p>I am Tooltip</p>} />
  );
};

export default TooltipExample;
