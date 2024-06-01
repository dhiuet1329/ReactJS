// import React from "react";

import { useForm } from "react-hook-form";

const ProductAdd = ({ onAddProduct }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    onAddProduct(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Product ADD</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title", { required: true, maxLength: 20 })}
          />
          {errors.title && errors.title.message}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            {...register("price")}
          />
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
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProductAdd;
