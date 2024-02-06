import { highlight } from "@/lib/shiki";

const Code = async ({ code }: { code: string }) => {
  const component = await highlight(code);

  return (
    <div
      className="flex-1 mt-5 overflow-x-auto rounded-md bg-[#151515] max-w-4xl p-5 text-sm"
      dangerouslySetInnerHTML={{ __html: component }}
    />
  );
};

export default Code;
