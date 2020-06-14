import React from "react";

function CustomCss() {
  return (
    <section className="max-w-80 flex flex-col md:flex-row ">
      <div className="h-64 w-full bg-gray-nice">
        <h3 className="font-bold text-3xl px-4 pt-4">Container CSS</h3>
      </div>
      <div className="h-64 w-full bg-gray-400">
        <h3 className="font-bold text-3xl px-4 pt-4">Item(s) CSS</h3>
      </div>
    </section>
  );
}

export default CustomCss;
