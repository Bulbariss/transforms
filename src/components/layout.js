import PropTypes from "prop-types";
import React, { Fragment } from "react";
import SmartOutline from "./SmartOutline";
import Header from "./Header";
// import Footer from "./footer";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <SmartOutline />
      <main>{children}</main>
      {/* <Footer /> */}
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
