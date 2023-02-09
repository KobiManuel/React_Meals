import React, { useState, useEffect } from "react";
import { CartState } from "../../store/Context";

const CartItem = ({ meals }) => {
  const [quantity, setQuantity] = useState(1);
  const {
    state: { cart },
    setTotal,
  } = CartState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (accumulator, currentValue) =>
          accumulator + Number(Math.round(currentValue.price)) * quantity,
        0
      )
    );
  }, [cart, quantity, setTotal]);

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
            <button
              className="font-semibold"
              onClick={() => {
                setQuantity(quantity - 1);
                if (quantity <= 1) {
                  setQuantity(quantity);
                }
              }}
            >
              -
            </button>
            <input
              type="text"
              className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
              value={quantity}
            />
            <button
              className="font-semibold"
              onClick={() => {
                setQuantity((prevValue) => prevValue + 1);
                setTotal(
                  cart.reduce(
                    (accumulator, currentValue) =>
                      accumulator + Number(Math.round(currentValue.price)),
                    0
                  )
                );
              }}
            >
              +
            </button>
          </div>

          <div className="pr-8 ">
            <span className="text-xs font-medium">
              ${Math.round(meals.price) * quantity}
            </span>
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
