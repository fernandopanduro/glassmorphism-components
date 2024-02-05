import React from "react";
import Code from "./Code";
import ComponentWrapper from "./ComponentWrapper";
import CopyCode from "./CopyCode";
import Heading from "./Heading";

type Props = {
  name: string;
  component: string;
  exampleComponent: JSX.Element;
};

export default function Component({
  name,
  component,
  exampleComponent,
}: Props) {
  return (
    <div id={name} className="space-y-2 pt-5">
      <Heading text={name} />

      <h2
        id="usage"
        className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Usage
      </h2>
      <div className="flex flex-col gap-5 justify-center items-center w-full">
        <Code code={component} />
        <CopyCode code={component} />
      </div>

      <h2
        id="example"
        className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Example
      </h2>
      <ComponentWrapper>{exampleComponent}</ComponentWrapper>
    </div>
  );
}
