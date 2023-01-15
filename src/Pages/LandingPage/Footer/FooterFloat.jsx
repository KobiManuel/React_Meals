import React from "react";
import Button from "../../../UI/Button/Button";
import float_img from "./images/float_img3.jpg";

const FooterFloat = () => {
  return (
    <div className=" w-[70%] h-[260px] mx-auto rounded-[2rem] absolute z-50 top-[2rem] translate-x-[22%]">
      <div className="relative rounded-[2rem]">
        <div
          style={{
            backgroundImage: "url(" + float_img + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width: "100%",
            maxWidth: "100%",
            height: "260px",
          }}
          className="absolute before:content-[''] before:absolute brightness-[0.30] z-[-1] rounded-[2rem]"
        ></div>
        <header className=" body-font font-poppins w-[365px] text-center mx-auto flex flex-col justify-center items-center gap-8 py-[50px]">
          <h3 className=" text-white font-semibold text-3xl">
            Join Our Family and Get Discounts Up To 50%
          </h3>
          <div className="bg-white rounded-[1rem] flex flex-row justify-between  px-6 py-[0.50rem] w-[450px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="capitalize text-[#868e96] text-xs w-[60%] outline-none"
            />
            <Button>sign up</Button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default FooterFloat;
