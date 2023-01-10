import React from "react";
import { MealCardInfo } from "../../Pages/LandingPage/MealsSection/MealCardInfo";
import styles from "./TransparentBtn.module.css";

const Btn = ({ setItem, menuItems }) => {
  return (
    <>
      <div className="flex flex-row justify-between -translate-y-[150%] ">
        {menuItems.map((Val, id) => {
          return (
            <button
              className={`${styles.button} font-medium body-font font-poppins`}
              key={id}
            >
              {Val}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          );
        })}
        <button
          className={`${styles.button}  font-medium body-font font-poppins`}
          onClick={() => setItem(MealCardInfo)}
        >
          All Categories
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
};

export default Btn;
