import PropTypes from "prop-types";
import React, { Fragment } from "react";
import SmartOutline from "./utils/SmartOutline";
import Header from "./Header";
import Footer from "./Footer";
import { CounterProvider } from "./store/Store";
import ReactGA from "react-ga";

function Layout({ children }) {
  const trackingId = "UA-171683260-1";
  ReactGA.initialize(trackingId);
  return (
    <Fragment>
      <CounterProvider>
        <div className="relative min-h-screen overflow-x-hidden">
          <Header />
          <SmartOutline />
          <main>{children}</main>
          <Footer />
        </div>
      </CounterProvider>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
