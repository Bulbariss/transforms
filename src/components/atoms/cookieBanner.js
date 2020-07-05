import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { handleRejectCookies, handleAllowCookies } from "../utils/CookieUtils";
import Button from "./Button";

function CookieBanner({ isVisible }) {
  let [visibility, setVisibility] = useState();

  useEffect(() => {
    setVisibility(isVisible["visible"]);
  }, [isVisible]);

  function accept() {
    handleAllowCookies();
    setVisibility(false);
  }

  function decline() {
    handleRejectCookies();
    setVisibility(false);
  }

  return (
    <div
      className={`fixed bottom-0 right-0 w-full pb-6 px-2 sm:px-4 z-50 text-dark ${
        !visibility && "hidden"
      }`}
    >
      <div
        id="cookie-banner-container"
        className="max-w-80 bg-grey-300 flex rounded-lg py-4 sm:py-2 items-center flex-col sm:flex-row px-4 w-fit "
      >
        <p className="h-fit text-coolgrey-900 pb-2 md:pb-0">
          This website uses cookies to ensure you get the best experience.{" "}
          <Link
            to="/privacy-policy"
            rel="canonical"
            className="text-coolgrey-600 hover:text-coolgrey-400 underline"
          >
            Read privacy policy
          </Link>
        </p>
        <div className="sm:ml-16 flex mt-2 sm:mt-0">
          <Button
            onClick={() => decline()}
            type="classic"
            className="border-2 border-dark hover:bg-grey-200"
          >
            Decline
          </Button>
          <Button
            onClick={() => accept()}
            type="classic"
            className="text-white bg-indigo-700 hover:bg-indigo-600 ml-4"
          >
            Allow cookies
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
