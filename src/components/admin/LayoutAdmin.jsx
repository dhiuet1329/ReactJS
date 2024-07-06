// import React from 'react'

import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import SideBar from "./SideBar";

const LayoutAdmin = () => {
  return (
    <>
      <HeaderAdmin />
      <div className="wrapper">
        <div
          className="sidebar"
          data-background-color="white"
          data-active-color="danger"
        >
          <SideBar />
        </div>
        <div className="main-panel">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
