import { createContext, useEffect, useReducer } from "react";
import instance from "../axios";
import productReducer from "../reducers/productReducer";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, { products: [] });

  useEffect(() => {
    const fetchAPI = async () => {
      const { data } = await instance.get("/products");
      console.log(data);
      dispatch({ type: "SET_PRODUCTS", payload: data });
    };
    fetchAPI();
  }, []);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
