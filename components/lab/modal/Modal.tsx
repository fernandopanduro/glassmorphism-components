"use client";

import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { MdClose } from "react-icons/md";
import Button from "../button/ButtonBackgroundShine";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal = ({ active, setActive, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  if (!active) return null;

  return ReactDom.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
      className="fixed left-0 top-0 z-50 h-[100dvh] w-screen grid place-items-center bg-black/20 backdrop-blur-md transition-all duration-300">
      <div
        style={{
          opacity: isVisible ? "1" : "0",
          visibility: isVisible ? "visible" : "hidden",
        }}
        onClick={e => e.stopPropagation()}
        className="relative flex w-[350px] flex-col items-center justify-center rounded-md border-r border-b border-white/20 bg-white/05 backdrop-blur-md p-10 pt-12 font-bold transition-all duration-300">
        <button onClick={closeModal}>
          <MdClose className="absolute right-3 top-3 h-6 w-6" />
        </button>
        {children}
        <Button onClick={closeModal}>Ok</Button>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement

    // don't forget to add
    // <div id="modal"></div>
    // to index.html
  );
};

export default Modal;
