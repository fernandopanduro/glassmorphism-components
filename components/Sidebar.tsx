import components from "@/data/components";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] overflow-y-auto border-r-4 border-black w-[300px]">
      <div className=" block border-b-4 border-r-4 border-black p-4 text-xl font-bold m800:p-4 m800:text-base">
        Getting started
      </div>
      <div className="grid grid-flow-row auto-rows-max text-sm">
        <Link
          href={`/docs`}
          className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground capitalize">
          Introduction
        </Link>
        <Link
          href={`/docs/installation`}
          className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground capitalize">
          Installation
        </Link>
      </div>
      <div className="sidebaritem block border-b-4 border-r-4 border-black p-4 text-xl font-bold m800:p-4 m800:text-base">
        Components
      </div>
      <div className="grid grid-flow-row auto-rows-max text-sm">
        {components.map((item, index) => {
          return (
            <Link
              href={`/docs/components/${item.name}`}
              key={index}
              className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground capitalize">
              {item.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}