import React from "react";
import Button from "../../Button/Button";

const MealCard = ({ meal, mealNametop, mealNameBottom, id, onClick, price }) => {
  return (
    <div className="rounded-[2rem] bg-stone-100 w-[220] h-[334.67px] flex flex-col justify-center items-center">
      <div className="relative overflow-hidden w-full h-fit group">
        <div className="w-[100%] h-[220.06px] max-[1029px]:w-[60%] max-[1029px]:h-[150px] mx-auto max-[618px]:w-[50%] max-[618px]:h-[220px]">
          <img
            src={meal}
            alt="/"
            className="mx-auto w-full h-full object-cover "
          />{" "}
        </div>
        <div className="capitalize body-font font-poppins font-semibold text-[var(--secondary)] text-xl text-center">
          <p>{mealNametop}</p>
          <p>{mealNameBottom}</p>
        </div>
        <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-lg font-semibold body-font font-poppins text-white ">{price}</span>
          <Button onClick={() => onClick(mealNametop)}>add to cart</Button>
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
