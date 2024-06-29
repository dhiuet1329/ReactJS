// import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import productSchema from "./../../schemaValid/productSchema";

import instance from "../../axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";

// eslint-disable-next-line react/prop-types
const ProductForm = () => {
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams(); //id
  // console.log(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const { data } = await instance.get(`/products/${id}`);
          reset(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [id]);
  const onSubmit = (data) => {
    (async () => {
      try {
        if (id) {
          //edit
          await instance.patch(`/products/${id}`, data);
          dispatch({ type: "EDIT_PRODUCT", payload: { id, ...data } });
        } else {
          //add
          const res = await instance.post("/products", data);
          dispatch({ type: "ADD_PRODUCT", payload: res.data });
        }
        if (confirm("Successfuly, redirect admin page ?")) {
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <form onSubmit={handleSubmit((data) => onSubmit({ ...data, id }))}>
        <h1>{id ? "Edit product" : "Add product"}</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="title">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", { required: true, valueAsNumber: true })}
          />
        </div>
        {errors.price && <p className="text-danger">{errors.price.message}</p>}
        <div className="form-group">
          <label htmlFor="title">Description</label>
          <input
            type="text"
            className="form-control"
            id="Description"
            {...register("description")}
          />
        </div>
        <div className="form-group">
          <button className=" btn btn-primary">
            {id ? "Edit product" : "Add product"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
