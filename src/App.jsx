import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/admin/Dashboard";
import { useEffect, useState } from "react";
import api from "./axios";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await api.get("/products");
      setProducts(data);
    })();
  }, []);
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
            element={<Dashboard data={products} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
