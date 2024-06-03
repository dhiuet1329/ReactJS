import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import api, { getProducts } from "./axios";
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
  // const handleSubmit = (data) => {
  //   // console.log(data);
  //   (async () => {
  //     try {
  //       const res = await api.post("/products", data);
  //       setProducts([...products, res.data]);
  //       if (confirm("Add succefully, redirect to admin page?")) {
  //         navigate("/admin");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // };
  // const handleSubmitEdit = (data) => {
  //   // console.log(data);
  //   (async () => {
  //     try {
  //       await api.patch(`/products/${data.id}`, data);
  //       const newData = await getProducts();
  //       console.log(newData);
  //       // setProducts(
  //       //   products.map((products) =>
  //       //     products.id === data.id ? data : products
  //       //   )
  //       // );
  //       setProducts(newData);
  //       if (confirm("Edit succefully, redirect to admin page?")) {
  //         navigate("/admin");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // };

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
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home data={products} />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/admin"
            element={<Dashboard data={products} remove={handleRemove} />}
          />
          {/* <Route
            path="/admin/product-add"
            element={<ProductAdd onAddProduct={handleSubmit} />}
          />
          <Route
            path="/admin/product-edit/:id"
            element={<ProductEdit onEditProduct={handleSubmitEdit} />}
          /> */}
          <Route
            path="/admin/product-form/"
            element={<ProductForm onProduct={handleSubmitForm} />}
          />
          <Route
            path="/admin/product-form/:id"
            element={<ProductForm onProduct={handleSubmitForm} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
