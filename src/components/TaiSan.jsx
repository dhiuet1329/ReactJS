// import React from 'react'

import { useContext } from "react";
import { TaiSanContext } from "../contexts/TaiSanContext";

const TaiSan = () => {
  const value = useContext(TaiSanContext);
  console.log(value);
  return <div></div>;
};

export default TaiSan;
