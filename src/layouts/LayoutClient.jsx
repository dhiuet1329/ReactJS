// import React from "react";

import Footer from "../conponents/Footer";
import Header from "../conponents/Header";

// eslint-disable-next-line react/prop-types
const LayoutClient = ({ children, data }) => {
  console.log(data);
  return (
    <>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutClient;
