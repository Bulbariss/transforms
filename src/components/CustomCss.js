import React from "react";
import ItemCss from "./molecules/ItemCss";
import ContainerCss from "./molecules/ContainerCss";

function CustomCss() {
  return (
    <section className="max-w-80 flex flex-col md:flex-row ">
      <ContainerCss />
      <ItemCss />
    </section>
  );
}

export default CustomCss;
