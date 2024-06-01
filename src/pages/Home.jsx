// import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Home = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4">
            <div className="card">
              <Link to={`/product-detail/${item.id}`}>
                <img src={item.thumbnail} alt="" />
              </Link>
              <div className="content">
                <Link to={`/product-detail/${item.id}`}>
                  <h2 className="content-title">{item.title}</h2>
                </Link>
                <p>Price: {item.price}</p>
                <button className="btn btn-primary">Mua ngay</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Home;
