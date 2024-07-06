// import React from "react";
import HeaderAdmin from "../components/admin/HeaderAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <HeaderAdmin />
      <main className="container">{children}</main>
    </>
  );
};

export default LayoutAdmin;
