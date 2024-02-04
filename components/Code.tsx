import { highlight } from "@/lib/shiki";

const Code = async ({ code }: { code: string }) => {
  const component = await highlight(code);

  return (
    <div
      className="w-full mt-5 overflow-x-auto rounded-md border-2 border-black bg-[#151515] p-5 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      dangerouslySetInnerHTML={{ __html: component }}
    />
  );
};

export default Code;
