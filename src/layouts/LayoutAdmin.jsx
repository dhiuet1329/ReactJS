// import React from "react";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin">Thống kê</Link>
          </li>
          <li>
            <Link to="/admin">Users</Link>
          </li>
        </ul>
      </header>
      <main className="container">
        <div className="row">
          <div className="col-3">
            <div className="sidebar">
              <h1>Hello, Admin</h1>
              <ul>
                <li>
                  <Link>Link 1</Link>
                </li>
                <li>
                  <Link>Link 1</Link>
                </li>
                <li>
                  <Link>Link 1</Link>
                </li>
                <li>
                  <Link>Link 1</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6">{children}</div>
        </div>
      </main>
      {children}
    </div>
  );
};

export default LayoutAdmin;
