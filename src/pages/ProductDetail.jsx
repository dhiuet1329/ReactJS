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
      const { data } = await instance.get(`/products/${id}`);
      setP(data);
    })();
  }, []);
  return (
    <div>
      <main>
        <div className="card-detail">
          <div className="container-fliud">
            <h1 className="mb-3">Chi tiết sản phẩm</h1>
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane">
                    <img src={p.thumbnail} alt={p.title} />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{p.title}</h3>
                <p>{p.brand}</p>
                <p>{p.description}</p>
                <h4 className="price">
                  Giá hiện tại:
                  <p>
                    <span>{p.price}</span>
                  </p>
                </h4>
                <div className="action">
                  <button className="btn btn-primary">Add to card</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
