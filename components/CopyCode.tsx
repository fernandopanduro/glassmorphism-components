"use client";
import React, { useState } from "react";
import Button from "./glassmorphism/Button";

export default function CopyCode({ code }: { code: string }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 2500);
      })
      .catch(() => {
        alert(
          "Your device doesn't support navigator api, so you'll have to manually select and copy the code."
        );
      });
  };

  return (
    <Button onClick={handleClick}>
      {isClicked ? "Copied to clipboard" : "Copy this component"}
    </Button>
  );
}
