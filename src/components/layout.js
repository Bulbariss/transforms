import PropTypes from "prop-types";
import React, { Fragment } from "react";
import SmartOutline from "./utils/SmartOutline";
import Header from "./Header";
import Footer from "./Footer";
import { CounterProvider } from "./store/Store";

function Layout({ children }) {
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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-171683260-1"
      ></script>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
