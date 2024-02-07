import { promisify } from "util";
import fs from "fs";
import path from "path";
import CodeBlock from "@/components/app/CodeBlock";
import { COMPONENTS } from "@/data/components";
import ComponentPlayground from "@/components/app/ComponentPlayground";
import Pagination from "@/components/Pagination";

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8"
  );

  return fileContent;
}

export async function generateStaticParams() {
  const componentSlugs = COMPONENTS.map(component => ({
    slug: component.slug,
  }));

  return componentSlugs;
}

export const dynamicParams = true;

const ComponentPage = async ({ params }: { params: { slug: string } }) => {
  const currentComponentData = COMPONENTS.find(
    component => component.slug === params.slug
  );

  if (!currentComponentData) {
    return <div>Component not found</div>;
  }

  const filePath = `./components/lab/${
    currentComponentData?.type
  }/${currentComponentData?.name.replace(/\s+/g, "")}.tsx`;

  const code = await readFilePath(filePath);
  const twConfig = JSON.stringify(currentComponentData?.twConfig, null, 2);

  return (
    <div className=" flex gap-5 overflow-hidden">
      <section className="flex-1">
        <h1 className="text-md mb-2 font-light text-gray-400">
          {currentComponentData.name}
        </h1>
        <div className="w-full">
          <ComponentPlayground isCentered>
            <currentComponentData.component />
          </ComponentPlayground>
          <div className="mt-8">
            <CodeBlock code={code} lang="tsx" />
          </div>
          {Boolean(twConfig) ? (
            <div className="mt-8">
              <CodeBlock
                code={twConfig}
                lang="tsx"
                fileName="tailwind.config.js"
              />
            </div>
          ) : null}
          <Pagination
            prev={
              currentComponentData.prevComponent
                ? {
                    name: `${currentComponentData.prevComponent}`,
                    path: `/docs/components/${currentComponentData.prevComponent}`,
                  }
                : undefined
            }
            next={
              currentComponentData.nextComponent
                ? {
                    name: `${currentComponentData.nextComponent}`,
                    path: `/docs/components/${currentComponentData.nextComponent}`,
                  }
                : undefined
            }
          />
        </div>
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
