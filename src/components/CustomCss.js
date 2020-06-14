import React from "react";
import CssCard from "./molecules/CssCard";

function CustomCss() {
  return (
    <section className="max-w-80 flex flex-col md:flex-row ">
      <CssCard label="Container Css" />
      <CssCard label="Item(s) Css" />
    </section>
  );
}

export default CustomCss;
