import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  name: string;
};

const Button = ({ href, name }: Props) => {
  return <Link href={href}>{name}</Link>;
};

export default Button;
