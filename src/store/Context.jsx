import React, { createContext, useContext, useReducer } from "react";
import { MealCardInfo } from "../Pages/LandingPage/MealsSection/MealCardInfo";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: MealCardInfo,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
