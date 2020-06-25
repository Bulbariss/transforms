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
        <Header />
        <SmartOutline />
        <main>{children}</main>
        <Footer />
      </CounterProvider>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
