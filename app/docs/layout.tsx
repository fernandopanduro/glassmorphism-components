import Sidebar from "@/components/Sidebar";
import React from "react";

const DocsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex container mx-auto pt-28">
      <Sidebar />
      {children}
    </main>
  );
};

export default DocsLayout;
