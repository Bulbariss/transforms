import React from "react";
import ThemeToggle from "./atoms/ThemeToggle";
import { Link } from "gatsby";

function Header() {
  return (
    <div className="h-14 flex justify-between items-center max-w-80 px-4 relative z-50">
      <Link className="text-lg font-bold text-black" to="/">
        CSS Transforms
      </Link>
      <div className="flex items-center">
        <ThemeToggle />
        <Link className="text-lg font-bold" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
