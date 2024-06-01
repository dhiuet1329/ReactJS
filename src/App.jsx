import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/admin/Dashboard";
import { useEffect, useState } from "react";
import api from "./axios";
import ProductDetail from "./pages/ProductDetail";
import ProductAdd from "./pages/admin/ProductAdd";
import Notfound from "./pages/NotFound";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await api.get("/products");
      setProducts(data);
    })();
  }, []);
  const handleSubmit = (data) => {
    // console.log(data);
    (async () => {
      try {
        const res = await api.post("/products", data);
        setProducts([...products, res.data]);
        if (confirm("Add succefully, redirect to admin page?")) {
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    //Cách sử dụng JSX
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home data={products} />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Dashboard data={products} />} />
          <Route
            path="/admin/product-add"
            element={<ProductAdd onAddProduct={handleSubmit} />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
