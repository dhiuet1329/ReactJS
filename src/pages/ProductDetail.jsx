// import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [p, setP] = useState({});
  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/product/${id}`);
      setP(data);
    })();
  });
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img src={p.thumbnail} alt="" />
        </div>
        <div className="col-6">
          <h3>{p.title}</h3>
          <p>{p.price}</p>
          <p>{p.description}</p>
          <button className="btn btn-danger">Mua ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
