// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Home({ data }) {
  // console.log(data);
  return (
    <>
      <h1>Danh sach san pham</h1>
      <div className="row">
        {data.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div className="card">
              <Link to={`/product-detail/${product.id}`}>
                <img src={product.thumbnail} alt="" />
              </Link>
              <div className="content">
                <Link to={`/product-detail/${product.id}`}>
                  <h2>{product.title}</h2>
                </Link>
                <p>{product.description}</p>
                <p>{product.price}$</p>
                <button className="btn btn-danger">Mua ngay</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
Home.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Home;
