"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Button from "./glassmorphism/Button";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    setMenuPosition({ left, top, width, height });
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white/05 backdrop-blur-sm flex items-center z-10">
      <div className="mx-auto flex items-center justify-between gap-2 container z-20">
        <ul className="flex items-center">
          <li
            className="px-4 py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link href={"/"}>
              <h1 className="uppercase text-3xl font-black">Glass</h1>
            </Link>
          </li>
          <li
            className="px-4 py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link href={"/Docs"}>Docs</Link>
          </li>
          <li
            className="px-4 py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link href={"/Docs/Components"}>Components</Link>
          </li>
          <li
            className="px-4 py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link href={"/Pricing"}>Princing</Link>
          </li>
          <li
            className="px-4 py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link
              target="__blanck"
              href={
                "https://github.com/fernandopanduro/glassmorphism-components"
              }>
              Github
            </Link>
          </li>
        </ul>
        <ul className="flex items-center">
          <li
            className="px-2 py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link
              target="__blanck"
              href={
                "https://github.com/fernandopanduro/glassmorphism-components"
              }>
              <FaGithub size={24} />
            </Link>
          </li>
          <li className="px-2 py-2">
            <Link href={"/docs"}>
              <Button>Get Started</Button>
            </Link>
          </li>
        </ul>
      </div>

      {menuVisible && (
        <div
          className="absolute bg-white/20 backdrop-blur-md rounded z-50 left-0 top-0"
          style={{
            transform: `translateX(${menuPosition.left}px) translateY(${menuPosition.top}px)`,
            width: menuPosition.width,
            height: menuPosition.height,
            transition: "all 300ms ease-in-out",
            opacity: menuVisible ? 1 : 0,
            visibility: menuVisible ? "visible" : "hidden",
            zIndex: 10,
          }}></div>
      )}
    </header>
  );
};

export default Header;
