import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className=" shadow-xl bg-white body-font font-poppins">
      <div className=" max-w-[1100px] flex bg-white items-center justify-between gap-9 h-24 mx-auto">
        <div className="pl-2 w-fit flex flex-row">
          <h3 className=" text-2xl font-semibold text-[var(--primary)]">
            React <span className="text-[var(--secondary)]">Meals</span>
          </h3>
        </div>
        <ul
          id="unorderedList"
          className="hidden lg:flex gap-9 text-sm text-[var(--secondary)]"
        >
          <li className=" border-b-2 border-b-[var(--primary)] font-semibold text-[15px]">
            <a href="#0">Home</a>
          </li>
          <li className=" text-[#868e96] text-[15px]">
            <a href="#0">Menu</a>
          </li>
          <li className=" text-[#868e96] text-[15px]">
            <a href="#0">How it works</a>
          </li>
          <li className=" text-[#868e96] text-[15px]">
            <a href="#0">About</a>
          </li>
          <li className=" text-[#868e96] text-[15px]">
            <a href="#0">FAQS</a>
          </li>
          <li className=" text-[#868e96] text-[15px]">
            <a href="#0">Contact</a>
          </li>
        </ul>
        <div className="w-fit text-white font-semibold pr-2">
          <button className=" rounded-full bg-[var(--primary)] px-4 py-2 flex flex-row justify-between gap-3 text-sm">
            <AiOutlineShoppingCart className=" flex self-center" size={20} />{" "}
            Your Cart<span className=" bg-orange-800 rounded-full px-3">0</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
