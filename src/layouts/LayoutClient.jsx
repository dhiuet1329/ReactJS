// import React from "react";
import Header from "../components/client/Header";
import Footer from "../components/Footer";

const LayoutClient = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutClient;
