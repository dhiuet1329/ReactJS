import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail";
import AuthForm from "./pages/AuthForm";
import PrivateRoute from "./pages/PrivateRoute";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import instance from "./axios";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleSubmitForm = (data) => {
    (async () => {
      try {
        if (data.id) {
          //edit
          await instance.patch(`/products/${data.id}`, data);
          const newData = await instance.get("/products");
          // console.log(newData);
          // setProducts(products.map((p) => (p.id === data.id ? data : p)));
          setProducts(newData);
        } else {
          //add
          const res = await instance.post("/products", data);
          setProducts([...products, res.data]);
        }
        if (confirm("Successfuly, redirect admin page ?")) {
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  // const removeProduct = (id) => {
  //   // console.log(id);
  //   (async () => {
  //     try {
  //       if (confirm("Are you sure? ")) {
  //         await instance.delete(`/products/${id}`);
  //         //cach 1
  //         // const newData = products.filter((item) => item.id != id && item);
  //         //cach 2
  //         const newData = await instance.get(`/products`);
  //         setProducts(newData.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // };

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />

          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route
              path="/admin/product-form"
              element={<ProductForm onProduct={handleSubmitForm} />}
            />
            <Route
              path="/admin/product-form/:id"
              element={<ProductForm onProduct={handleSubmitForm} />}
            />
          </Route>

          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm isRegister />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
