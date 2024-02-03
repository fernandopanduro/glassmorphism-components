import Link from "next/link";
import React from "react";

type Props = {};

const Docs = (props: Props) => {
  return (
    <div>
      <h1>Introduccion</h1>
      <Link href={"/docs/installation"}>Installation</Link>
    </div>
  );
};

export default Docs;
