import { useEffect, useState } from "react";
import api from "../axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [p, setP] = useState({});
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products/${id}`);
      setP(data);
    })();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img src={p.thumbnail} alt="" />
        </div>
        <div className="col-6">
          <h2>{p.title}</h2>
          <p>{p.price}</p>
          <p>{p.description}</p>
          <button className="btn btn-primary">Mua ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
