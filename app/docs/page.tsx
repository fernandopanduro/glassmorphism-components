import Heading from "@/components/Heading";
import Pagination from "@/components/Pagination";
import React from "react";

type Props = {};

const Docs = (props: Props) => {
  return (
    <div className="flex-1 flex gap-3">
      <section className="flex-1">
        <div className="space-y-2 pt-5">
          <Heading text="Introduction" />
          <p className="text-lg text-muted-foreground">
            <span
              style={{
                display: "inline-BlockList",
                verticalAlign: "top",
                textDecoration: "inherit",
                maxWidth: "513px",
              }}>
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source.
            </span>
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            Glassmorphism components is a collection of type-safe components
            written in React and Tailwind.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            This is <strong>NOT</strong> a component library. It&apos;s a
            collection of re-usable components that you can copy and paste into
            your apps.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            Pick the components you need. Copy and paste the code into your
            project and customize to your needs. The code is yours.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            I created this collection of components for people who want to learn
            more about glassmorphism style, and to help them get started with
            creating glassmorphism layouts.
          </p>
        </div>
        <Pagination
          next={{ name: "Installation", path: "/docs/installation" }}
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

export default Docs;
