import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { CartState } from "../../store/Context";
import { useNavigate } from "react-router-dom";
import styles from "../Button/Button.module.css";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  //making navbar sticky on scroll
  const [sticky, setSticky] = useState(false);
  const stickyScrollHandler = () => {
    if (window.scrollY >= 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", stickyScrollHandler);

  const {
    state: { cart },
  } = CartState();
  return (
    <div
      className={
        sticky
          ? " shadow-xl fixed w-full z-[70] transition-all duration-500 ease-in delay-150 bg-white body-font font-poppins"
          : " shadow-xl  bg-white body-font font-poppins"
      }
    >
      <div className=" max-w-[1100px] flex bg-white items-center justify-between gap-9 h-24 mx-auto px-2">
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
          <button
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            className=" rounded-full bg-[var(--primary)] px-4 py-2 flex flex-row justify-between gap-3 text-sm"
            onClick={() => setShowModal(true)}
          >
            <AiOutlineShoppingCart className=" flex self-center" size={20} />{" "}
            Your Cart
            <span className=" bg-orange-800 rounded-full px-3">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-[100] overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            {cart >= 0 ? (
              <div className="flex items-center justify-center min-h-screen px-4 py-8">
                <div className="relative w-full h-[250px] max-w-lg p-4 mx-auto bg-stone-100 rounded-md shadow-lg flex items-center justify-center gap-3 ">
                  <BsCartCheckFill
                    size={40}
                    className=" text-[var(--primary)]"
                  />
                  <p className="text-center body-font font-poppins text-[var(--secondary)] text-lg">
                    Cart is empty
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-screen px-4 py-8">
                <div className="relative w-full h-[250px] max-w-lg p-4 mx-auto bg-stone-100 rounded-md shadow-lg flex flex-col gap-3 items-center justify-center ">
                  <BsCartCheckFill
                    size={40}
                    className=" text-[var(--primary)]"
                  />
                  <p className="text-center body-font font-poppins text-[var(--secondary)] text-lg">
                    Click the button below to view cart items and checkout
                  </p>
                  <button
                    className={`${styles.button} `}
                    onClick={() => navigate("/shoppingCart")}
                  >
                    Go to cart
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default NavBar;
