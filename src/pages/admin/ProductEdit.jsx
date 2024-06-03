// import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect } from "react";
import api from "../../axios";
import { useParams } from "react-router-dom";
import productSchema from "../../schemaValid/productSchema";
/**
 * ! BTVN:
 * 1. validation title required, it nhat 6 ky tu
 * 2. validation price required, >=0
 */

// eslint-disable-next-line react/prop-types
const ProductEdit = ({ onEditProduct }) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        reset(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const onSubmit = (data) => {
    // console.log(data);
    onEditProduct({ ...data, id });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Product EDIT</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title?.message && (
            <p className="text-danger">{errors.title?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price?.message && (
            <p className="text-danger">{errors.price?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description")}
          />
          {/* {errors.description?.message && (
            <p className="text-danger">{errors.description?.message}</p>
          )} */}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
