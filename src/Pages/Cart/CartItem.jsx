import React, { useState } from "react";
import { CartState } from "../../store/Context";

const CartItem = ({ meals }) => {
    const [quantity, setQuantity] = useState(0);
    const {
        state: { cart },
      } = CartState();
  return (
    <div>
      <div className="flex justify-between items-center mt-6 pt-6 border-b  border-b-gray-200">
        <div className="flex  items-center">
          <img alt="/" src={meals.meal} width="80" className="rounded-full " />

          <div className="flex flex-col ml-3">
            <span className="md:text-md font-medium capitalize">
              {meals.mealNameTop} {meals.mealNameBottom}
            </span>
            <span className="text-xs font-light text-gray-400">{meals.id}</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="pr-8 flex ">
            <button className="font-semibold" onClick={() => {
                setQuantity(quantity - 1)
                if(quantity === 0) {
                    setQuantity(0)
                }
            }}>-</button>
            <input
              type="text"
              className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
              value={quantity}
            />
            <button className="font-semibold" onClick={() => {
                setQuantity(quantity + 1)
            }}>+</button>
          </div>

          <div className="pr-8 ">
            <span className="text-xs font-medium">${meals.price}</span>
          </div>
          <div>
            <i className="fa fa-close text-xs font-medium"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
