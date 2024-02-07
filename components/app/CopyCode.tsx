"use client";

import { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { MdOutlineLibraryAddCheck } from "react-icons/md";

type CopyCode = {
  code: string;
};

const CopyCode: React.FC<CopyCode> = ({ code }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div
      className="cursor-pointer rounded-md border border-gray-900 bg-transparent p-2 transition hover:bg-gray-900"
      onClick={onCopy}>
      {hasCheckIcon ? (
        <MdOutlineLibraryAddCheck className="h-4 w-4 text-gray-50" />
      ) : (
        <LuCopy className="h-4 w-4 text-gray-50" />
      )}
    </div>
  );
};

export default CopyCode;
