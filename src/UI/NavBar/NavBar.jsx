import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartState } from "../../store/Context";
import { useNavigate } from "react-router-dom";

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
          <button  type="button"
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
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-red-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Delete account ?
                                        </h4>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
    </div>
  );
};

export default NavBar;
