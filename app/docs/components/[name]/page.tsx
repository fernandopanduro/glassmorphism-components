import components from "@/data/components";
import { redirect } from "next/navigation";
import React from "react";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import Component from "@/components/Component";
import Pagination from "@/components/Pagination";

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
    <div className="flex-1 flex gap-3">
      <section className="flex-1">
        <div>
          <Component
            name={params.name}
            component={code}
            exampleComponent={<currentComponent.exampleComponent />}
          />
        </div>
        <Pagination
          prev={
            currentComponent.prevComponent
              ? {
                  name: `${currentComponent.prevComponent}`,
                  path: `/docs/components/${currentComponent.prevComponent}`,
                }
              : undefined
          }
          next={
            currentComponent.nextComponent
              ? {
                  name: `${currentComponent.nextComponent}`,
                  path: `/docs/components/${currentComponent.nextComponent}`,
                }
              : undefined
          }
        />
      </section>
      <div className="w-[300px]">
        <h4>On This Page</h4>
        <ul className="m-0 list-none">
          <li className="mt-0 pt-2">
            <a
              href="#usage"
              className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">
              Usage
            </a>
          </li>
          <li className="mt-0 pt-2">
            <a
              href="#example"
              className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">
              Example
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentPage;
