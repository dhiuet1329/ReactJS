// import React from "react";
// import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
function Home() {
  const { state } = useContext(ProductContext);

  // console.log(data);
  return (
    <>
      <h1 className="text-center">Danh sach san pham</h1>
      <div className="container">
        <div className="row">
          {state.products.map((product) => (
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
      </div>
    </>
  );
}
// Home.propTypes = {
//   data: PropTypes.array.isRequired,
// };
export default Home;
