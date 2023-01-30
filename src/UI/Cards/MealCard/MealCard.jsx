import React from "react";
import { CartState } from "../../../store/Context";
import styles from "../../Button/Button.module.css";

const MealCard = ({ meals }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="rounded-[2rem] bg-stone-100 w-[220] h-[334.67px] flex flex-col justify-center items-center">
      <div className="relative overflow-hidden w-full h-full rounded-[2rem] group">
        <div className="w-[100%] h-[220.06px] max-[543px]:h-[150px] max-[543px]:w-[40%]  max-[1029px]:w-[60%] max-[1029px]:h-[150px] mx-auto max-[618px]:w-[50%] max-[618px]:h-[220px]">
          <img
            src={meals.meal}
            alt="/"
            className="mx-auto w-full h-full object-cover "
          />{" "}
        </div>
        <div className="capitalize body-font font-poppins font-semibold text-[var(--secondary)] text-xl text-center">
          <p>{meals.mealNameTop}</p>
          <p>{meals.mealNameBottom}</p>
        </div>
        <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-lg font-semibold body-font font-poppins text-white ">
            {meals.price}
          </span>
          {cart.some((p) => p.id === meals.id) ? (
            <button
              className={`${styles.button} !w-fit `}
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: meals,
                });
              }}
            >
              remove from cart
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          ) : (
            <button
              className={`${styles.button} `}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: meals,
                });
              }}
            >
              add to cart
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
/* const MealCard = ({meal, mealNametop, mealNameBottom, img_width }) => {
  return (
    <div className='rounded-[2rem] bg-stone-100 w-[220] h-[334.67px] flex flex-col justify-center items-center'>
      <div className='w-[100%] h-[220.06px]'><img src={meal} alt="/" className={`${img_width} mx-auto w-full h-full object-cover`}/> </div>
       <div className='capitalize body-font font-poppins font-semibold text-[var(--secondary)] text-xl text-center'>
        <p>{mealNametop}</p>
        <p>{mealNameBottom}</p>
       </div>
    </div>
  )
}  */
export default MealCard;
