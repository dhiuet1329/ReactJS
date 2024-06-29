// import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import instance from "../../axios";

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const { state, dispatch } = useContext(ProductContext);
  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure ?")) {
        await instance.delete(`/products/${id}`);
        dispatch({ type: "DELETE_PRODUCT", payload: id });
      }
    } catch (error) {
      console.log(error);
    }
  };
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
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>
                {p.thumbnail ? (
                  <img src={p.thumbnail} alt="Updating.." width={100} />
                ) : (
                  "Updating.."
                )}
              </td>
              <td>{p.description || "Updating.."}</td>
              <td>
                <Link
                  to={`/admin/product-form/${p.id}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(p.id)}
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
// Dashboard.propTypes = {
//   data: PropTypes.array.isRequired,
// };
export default Dashboard;
