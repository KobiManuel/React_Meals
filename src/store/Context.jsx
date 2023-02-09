import React, { createContext, useContext, useReducer, useState } from "react";
import { MealCardInfo } from "../Pages/LandingPage/MealsSection/MealCardInfo";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
    const [total, setTotal] = useState();
  const [state, dispatch] = useReducer(cartReducer, {
    products: MealCardInfo,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch, total, setTotal }}>{children}</Cart.Provider>;
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
