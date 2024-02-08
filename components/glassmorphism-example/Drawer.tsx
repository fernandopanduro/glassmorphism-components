"use client";
import { useState } from "react";
import Drawer from "../lab/drawer/Drawer";
import Button from "../lab/button/Button";

export default function DrawerExample() {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsDrawerActive(true);
        }}>
        Open Drawer
      </Button>
      <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
        <a
          className="block w-full bg-transparent hover:bg-white/20 px-6 py-4 transition-colors"
          href="#">
          Item 1
        </a>
        <a
          className="block w-full bg-transparent hover:bg-white/20 px-6 py-4 transition-colors"
          href="#">
          Item 2
        </a>
        <a
          className="block w-full bg-transparent hover:bg-white/20 px-6 py-4 transition-colors"
          href="#">
          Item 3
        </a>
      </Drawer>
    </>
  );
}
