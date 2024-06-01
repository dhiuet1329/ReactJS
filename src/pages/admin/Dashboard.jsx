// import React from 'react'
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
  return (
    <div>
      <h1>Xin chao Admin</h1>
      <Link to="/admin/product-add" className="btn btn-success">
        Add new product
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>
                {p.thumbnail ? (
                  <img src={p.thumbnail} alt={p.title} />
                ) : (
                  "Updating.."
                )}
              </td>
              <td>{p.description || "Updating.."} </td>
              <td>
                <button className="btn btn-primary">Sua</button>
                <button className="btn btn-danger">Xoa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Dashboard.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Dashboard;
