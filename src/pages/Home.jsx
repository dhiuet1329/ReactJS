// import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Home = ({ data }) => {
  console.log("!1");
  console.log(data);
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {data.map((item) => (
        <div key={item.id} className="card">
          <Link to={`/product-detail/${item.id}`}>
            <img src={item.thumbnail} alt="" />
          </Link>
          <Link to={`/product-detail/${item.id}`}>
            <h2 className="content-title">{item.title}</h2>
          </Link>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Home;
