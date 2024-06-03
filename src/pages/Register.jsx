// import React from "react";
// import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import authSchema from "../schemaValid/authSchema";
import api from "../axios";
/**
 * ! BTVN:
 * 1. validation title required, it nhat 6 ky tu
 * 2. validation price required, >=0
 */

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    (async () => {
      try {
        const res = await api.post(`/register`, data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email?.message && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password?.message && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

// ProductAdd.propTypes = {
//   onAddProduct: PropTypes.func.isRequired,
// };
export default Register;
