import React from "react";
import CookieButtons from "./atoms/CookieButtons";

function Footer() {
  return (
    <>
      <div className="h-24 md:h-14" />
      <div className="w-full  absolute bottom-0">
        <div className="h-24 md:h-14 flex flex-wrap md:flex-no-wrap justify-between items-center max-w-80 px-4 pb-4 md:pb-0 text-white bg-gray-900">
          <p className="text-lg font-bold order-2 md:order-1 md:w-1/4">
            Vladimir V.
          </p>
          <CookieButtons
            classes={
              "order-1 md:order-2 w-full md:w-auto text-sm md:text-base pt-2 md:pt-0"
            }
          />
          <p className="text-lg font-bold order-3 md:w-1/4 text-right">©2020</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
