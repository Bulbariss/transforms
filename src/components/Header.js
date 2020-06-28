import React from "react";
import ThemeToggle from "./atoms/ThemeToggle";

function Header() {
  return (
    <div className="h-14 flex justify-between items-center max-w-80 px-4 xxl:px-0">
      <p className="text-lg font-bold text-on-background">CSS Transforms</p>
      <div className="flex items-center">
        <ThemeToggle />
        <p className="text-lg font-bold">About</p>
      </div>
    </div>
  );
}

export default Header;
