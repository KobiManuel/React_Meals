import React from "react";
import { MealCardInfo } from "../../Pages/LandingPage/MealsSection/MealCardInfo";
import styles from "./BtnTransparent.module.css";

const Btn = ({ setItem, menuItems, filterItem, style }) => {
  return (
    <>
      <div className="grid grid-cols-6 -translate-y-[110%] max-[1090px]:grid-cols-3 gap-y-4 items-center max-[1090px]:-translate-y-[80%] max-[462px]:grid-cols-2 ">
        {menuItems.map((Val, id) => {
          return (
            <button
              className={`${styles.button} font-medium body-font font-poppins focus:!bg-[var(--primary)] focus:text-white focus:outline-none justify-self-center self-center`}
              key={id}
              onClick={() => filterItem(Val)}
              style={style}
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
          className={`${styles.button}  font-medium body-font font-poppins focus:!bg-[var(--primary)] focus:text-white focus:outline-none justify-self-center self-center`}
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

/*  <div className="flex flex-row justify-between -translate-y-[110%] max-[1040px]:gap-4 max-[615px]:flex-col max-[615px]:items-center max-[615px]:translate-y-0 "> */