import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import CookieBanner from "./atoms/cookieBanner";
// import { activateCookies, deactivateCookies } from "./utils/CookieUtils";

function Footer2() {
  let [isBannerVisible, setIsBannerVisible] = useState({
    visible: true,
  });

  function newTrue() {
    setIsBannerVisible({ visible: true });
  }

  // useEffect(() => {
  //   const cookieConsent = getCookie("consent");
  //   if (cookieConsent === "true") {
  //     activateCookies();
  //   } else if (cookieConsent === "false") {
  //     deactivateCookies();
  //   } else {
  //     showCookieBanner();
  //   }
  // }, []);

  useEffect(() => {
    console.log("1");
  }, []);

  // function handleOnClick() {
  //   console.log("/");
  //   showBanner(!isCookieBannerOpened);
  //   setTimeout(() => {
  //     showBanner(!isCookieBannerOpened);
  //   }, 100);
  // }

  return (
    <>
      <footer id="footer" className="bg-indigo-1000">
        <div
          className="flex flex-wrap max-w-80 px-6 sm:px-10 lg:px-16  pt-16 pb-10 sm:py-24 text-white"
          id="footer-container"
        >
          <div className="item w-full s flex flex-col sm:flex-row">
            <div className="w-full sm:w-full text-4xl pb-16 sm:pb-0 let-space-5 font-black">
              LETTEWEB
            </div>
            <div className="w-full sm:w-full flex">
              <Link to="/contact" className="mb-auto text-xl hover-opacity  ">
                Get in touch - Let&apos;s make it official.
              </Link>
            </div>
          </div>
          <div className="item w-full pt-10 flex flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-full flex flex-col-reverse">
              <div className="h-fit mt-2">
                <Link className="hover-opacity" to="/privacy_policy">
                  Privacy Policy &#32;
                </Link>
                <p className="px-1 inline">|</p>
                <button
                  onClick={() => (newTrue(), console.log("?"))}
                  className="cursor-pointer hover-opacity btn-change-cookie-preferences inline"
                >
                  Cookie preferences
                </button>
              </div>
              <p className="h-fit mt-auto">© 2019, Letteweb</p>
            </div>
            <div className="w-full sm:w-full flex pb-12 sm:pb-0">
              <div className="w-1/2 lg:w-4/12">
                <p className="text-sm mb-2 font-bold">Contacts</p>
                <a
                  href="mailto:work@letteweb.lv"
                  className="block w-fit hover-opacity mb-2"
                >
                  Email
                </a>
                <Link to="/" className="block w-fit hover-opacity">
                  Whatsapp
                </Link>
              </div>
              <div className="w-1/2 lg:w-4/12">
                <p className="text-sm mb-2 font-bold">Follow us</p>
                <Link to="/" className="block w-fit mb-2 hover-opacity">
                  Instagram
                </Link>
                <Link to="/" className="block w-fit hover-opacity">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {isBannerVisible && <CookieBanner ttt={isBannerVisible} />}
    </>
  );
}

export default Footer2;
