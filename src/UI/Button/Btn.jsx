import React from "react";
import { MealCardInfo } from "../../Pages/LandingPage/MealsSection/MealCardInfo";
import styles from "./TransparentBtn.module.css";

const Btn = ({ setItem, menuItems, filterItem }) => {
  return (
    <>
      <div className="flex flex-row justify-between -translate-y-[110%] max-[1040px]:gap-4 ">
        {menuItems.map((Val, id) => {
          return (
            <button
              className={`${styles.button} font-medium body-font font-poppins focus:!bg-[var(--primary)] focus:text-white focus:outline-none`}
              key={id}
              onClick={() => filterItem(Val)}
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
          autoFocus
          className={`${styles.button}  font-medium body-font font-poppins focus:!bg-[var(--primary)] focus:text-white focus:outline-none`}
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
