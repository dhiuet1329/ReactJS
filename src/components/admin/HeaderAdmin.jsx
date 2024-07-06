// import React from 'react'
import { Link } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hosts">Quản lí host</Link>
        </li>
        <li>
          <Link to="/">Xem thông kê</Link>
        </li>
      </ul>
    </header>
  );
}
