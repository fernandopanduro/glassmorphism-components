import Heading from "@/components/Heading";
import Pagination from "@/components/Pagination";
import React from "react";

type Props = {};

const Installation = (props: Props) => {
  return (
    <div className="flex-1 flex gap-3">
      <section className="flex-1">
        <div>
          <Heading text="Installation" />
          <p className="text-lg text-muted-foreground">
            <span
              style={{
                display: "inline-BlockList",
                verticalAlign: "top",
                textDecoration: "inherit",
                maxWidth: "513px",
              }}>
              How to install dependencies and structure your app.
            </span>
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            These React components use tailwind for styling and react-icons for
            icons (feel free to use any other icons), so make sure you got them
            installed.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            This project and the components are written in TypeScript. We
            recommend using TypeScript for your project as well.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            Now choose any component you find useful, copy it to your project
            and adjust it so it fulfills your needs.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            Keep in mind that these are YOUR components. It's on you to make
            them more reusable and accessible. I created this to help you get
            started with glassmorphism.
          </p>
        </div>
        <Pagination
          prev={{ name: "Introduction", path: "/docs/" }}
          next={{ name: "Button", path: "/docs/components/button" }}
        />
      </section>
      <div className="w-[300px]">
        <h4>On This Page</h4>
        <ul className="m-0 list-none">
          <li className="mt-0 pt-2">
            <a
              href="#"
              className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">
              Seccion 1
            </a>
          </li>
          <li className="mt-0 pt-2">
            <a
              href="#"
              className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">
              Seccion 2
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Installation;
