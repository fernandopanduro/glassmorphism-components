import components from "@/data/components";
import { redirect } from "next/navigation";
import React from "react";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import Component from "@/components/Component";

const readFilePath = async (filePath: string) => {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8"
  );
  return fileContent;
};

const getCode = async (filePath: string) => {
  const code = await readFilePath(filePath);

  if (code.includes("'use client'")) {
    return code.slice(13);
  }

  // if component has use client in it we will remove it because these are react components, not nextjs components

  return code;
};

type Props = {
  params: { name: string };
};

const ComponentPage = async ({ params }: Props) => {
  const currentComponent = components.find(
    component => component.name === params.name
  );

  if (!currentComponent) {
    redirect("/docs");
  }

  const filePath = `./components/glassmorphism/${params.name}.tsx`;

  const code = await getCode(filePath);

  return (
    <Component
      name={params.name}
      component={code}
      exampleComponent={<currentComponent.exampleComponent />}
    />
  );
};

export default ComponentPage;
