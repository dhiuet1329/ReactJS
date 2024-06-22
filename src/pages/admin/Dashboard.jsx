// import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ data, removeProduct }) => {
  console.log(data);

  return (
    <div>
      <h1>Hello Admin</h1>

      {/* <div className="nav">
            <ul>
              <li>
                <Link to="admin">Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/categories">Categories</Link>
              </li>
              <li>
                <Link to="/admin.user">User</Link>
              </li>
            </ul>
          </div> */}

      <Link className="btn btn-primary" to="/admin/product-form">
        Add new product
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
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
                <img src={p.thumbnail} alt={p.title} width={100} />
              </td>
              <td>
                <Link
                  to={`/admin/product-form/${p.id}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  onClick={() => removeProduct(p.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
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
