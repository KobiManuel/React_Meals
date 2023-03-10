import React from "react";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import tomato from "./images/tomatoes.png";
import dash from "../../../assets/dash.png";
import Button from "../../../UI/Button/Button";
import MealCard from "../../../UI/Cards/MealCard/MealCard";
import { useState } from "react";
import { MealCardInfo } from "./MealCardInfo";
import Btn from "../../../UI/Button/Btn";

const MealsSection = () => {
  const [item, setItem] = useState(MealCardInfo);

  const menuItems = [...new Set(MealCardInfo.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = MealCardInfo.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  // const [mealTop, setmealTop] = useState("");

  // const changeContent = (value) => {
  // setmealTop(value);
  // };

  const [visible, setVisible] = useState(4);
  const showMoreOrLessHandler = () => {
    setVisible((prevValue) => prevValue + 4);
    if (visible === item.length) {
      setVisible((prevValue) => prevValue - prevValue + 4);
    }
  };

  return (
    <Wrapper bg_color=" bg-white z-10">
      <div className=" max-w-[1100px] mx-auto px-16">
        <figure className="w-fit relative -translate-y-[35%] translate-x-6 !mr-0 max-[846px]:-translate-y-[65%] max-[846px]:-translate-x-9 max-[571px]:-translate-y-[95%] max-[571px]:-translate-x-[4.5rem] ">
          <img
            src={tomato}
            alt="/"
            className=" w-[220px] max-[571px]:w-[150px]"
          />
        </figure>
        <header className="capitalize body-font font-poppins text-center w-fit mx-auto -translate-y-[100%]  max-[462px]:mb-9 ">
          <h5 className="text-4xl text-[var(--secondary)] font-semibold  max-[410px]:text-2xl">
            Favorite meals
          </h5>
          <img
            src={dash}
            alt="/"
            className="w-[300px] h-[60px] mt-[-9px] max-[410px]:w-[170px] max-[410px]:mt-[-18px]"
          />
        </header>
        <div className="w-full">
          <Btn
            menuItems={menuItems}
            setItem={setItem}
            filterItem={filterItem}
          />
        </div>
        <div className="grid grid-cols-4 gap-6 max-[1029px]:grid-cols-3 max-[812px]:grid-cols-2 max-[618px]:grid-cols-1 justify-center items-center">
          {item.slice(0, visible).map((meals) => (
            <MealCard meals={meals} key={meals.id} />
          ))}
        </div>
        {item === MealCardInfo ? (
          <div className=" w-fit mx-auto mt-12">
            <Button onClick={showMoreOrLessHandler}>
              {visible === item.length ? "Show Less" : "Show More"}
            </Button>
          </div>
        ) : (
          " "
        )}

        {/* {popUp === MealCardInfo ? (
          <div className="w-full h-fit">
            {item.map(({mealNameTop, id}) => {
              return (
                <div key={id}>
                  <p className="text-black text-">
                    Kobiiiiiii{mealNameTop}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          " "
        )} */}
      </div>
    </Wrapper>
  );
};
/*  <div className="flex flex-row justify-between -translate-y-[150%] ">
          <Button className={styles.button}>all categories</Button>
          <Button className={`!acctive ${styles.button}`}>ketogenic</Button>
          <Button className={styles.button}>low carb</Button>
          <Button className={styles.button}>low calorie</Button>
          <Button className={styles.button}>plant based</Button>
          <Button className={styles.button}>trendy</Button>
        </div> */
export default MealsSection;
