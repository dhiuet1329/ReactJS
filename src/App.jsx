import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import api, { getProducts } from "./axios";
import Footer from "./conponents/Footer";
import Header from "./conponents/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await api.get("/products");
      setProducts(data);
    })();
  }, []);

  const handleSubmitForm = (data) => {
    // console.log(data);
    (async () => {
      try {
        if (data.id) {
          //edit
          await api.patch(`/products/${data.id}`, data);
          const newData = await getProducts();
          // console.log(newData);
          setProducts(newData);
        } else {
          //add
          const res = await api.post("/products", data);
          setProducts([...products, res.data]);
        }

        // setProducts(
        //   products.map((products) =>
        //     products.id === data.id ? data : products
        //   )
        // );

        if (confirm("Edit succefully, redirect to admin page?")) {
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleRemove = (id) => {
    console.log(id);
    (async () => {
      try {
        if (confirm("Bạn muốn xóa ? ")) {
          await api.delete(`/products/${id}`);
          const newData = products.filter((item) => item.id !== id && item);
          setProducts(newData);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  console.log(<Header />);
  return (
    //Cách sử dụng JSX
    <div>
      <Header />
      <main className="container">
        <Routes>
          {/* path for client */}
          <Route index element={<Home data={products} />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />

          {/* path for admin */}

          <Route
            path="/admin"
            element={<Dashboard data={products} remove={handleRemove} />}
          />
          <Route
            path="/admin/product-form/"
            element={<ProductForm onProduct={handleSubmitForm} />}
          />
          <Route
            path="/admin/product-form/:id"
            element={<ProductForm onProduct={handleSubmitForm} />}
          />
          {/* path empty */}

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
