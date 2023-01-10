import React from "react";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import tomato from "./images/tomatoes.png";
import Button from "../../../UI/Button/Button";
import MealCard from "../../../UI/Cards/MealCard/MealCard";
import { useState } from "react";
import { MealCardInfo } from "./MealCardInfo";
import Btn from "../../../UI/Button/Btn";
import Header from "../../../UI/Header/Header";

const MealsSection = () => {
  const [item, setItem] = useState(MealCardInfo);

  const menuItems = [...new Set(MealCardInfo.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = MealCardInfo.filter((newVal) => {
        
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

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
        <figure className="w-fit relative -translate-y-[35%] translate-x-6 !mr-0">
          <img src={tomato} alt="/" className=" w-[220px]" />
        </figure>
       <Header title="favorite meals" text_color="text-[var(--secondary)]" />
        <div className="w-full">
          <Btn menuItems={menuItems} setItem={setItem}  filterItem={filterItem} />
        </div>
        <div className="grid grid-cols-4 gap-6">
          {item
            .slice(0, visible)
            .map(({ meal, mealNameTop, mealNameBottom, id }) => (
              <MealCard
                meal={meal}
                mealNametop={mealNameTop}
                mealNameBottom={mealNameBottom}
                key={id}
              />
            ))}
        </div>
        {item === MealCardInfo ? <div className=" w-fit mx-auto mt-12">
          <Button onClick={showMoreOrLessHandler}>
            {visible === item.length ? "Show Less" : "Show More"}
          </Button>
        </div> : " " }
        
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
