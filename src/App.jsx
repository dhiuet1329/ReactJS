import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import AuthForm from "./pages/AuthForm";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import PrivateRoute from "./pages/PrivateRoute";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import LayoutClient from "./components/LayoutClient";
import LayoutAdmin from "./components/admin/LayoutAdmin";
import ProductForm from "./components/admin/ProductForm";

function App() {
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
      {/* <Header /> */}
      <main className="container">
        <Routes>
          {/* Client Routes */}
          <Route path="/" element={<LayoutClient />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
          </Route>
          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <LayoutAdmin />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="product-form" element={<ProductForm />} />
            <Route path="product-form/:id" element={<ProductForm />} />
          </Route>
          {/* Authentication Routes */}
          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm isRegister />} />

          {/* Catch-All Route */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
