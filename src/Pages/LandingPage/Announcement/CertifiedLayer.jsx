import React from "react";
import Button from "../../../UI/Button/Button";
import styles from "../../../UI/Button/TransparentBtn.module.css";
import bowl from "./images/true_transparent.png";
import plant from "./images/firstPlant.png";
import signature from "./images/signature.png";
import pepper from "./images/pepper.png";
const CertifiedLayer = () => {
  return (
    <div className="w-full relative py-16">
      <img
        src={plant}
        alt="/"
        className="absolute w-[140px] top-0 left-[-50px]"
      />
      <div className="grid min-[803px]:grid-cols-12 items-center w-fit max-[803px]:grid-cols-1 justify-center mx-auto">
        <div className=" min-[803px]:col-span-7 max-[803px]:w-[80%] mx-auto">
          <img src={bowl} alt="/" className="w-full h-full" />
        </div>
        <div className=" body-font font-poppins flex items-center justify-end min-[803px]:col-span-4 max-[851px]:w-[300px] max-[803px]:px-6 max-[803px]:w-fit">
          <div className=" flex flex-col gap-5">
            <header className="flex flex-col gap-4">
              <h3
                className="text-[33px] text-[var
            (--secondary)] font-bold"
              >
                We Deliver Anywhere in the Tri-State Area
              </h3>
              <p className="text-[#868e96] text-sm">
                Each React Meal is perfectly sized for one person to enjoy at 1
                sitting. Our fully-prepared meals are delivered fresh, and ready
                to eat in 3 minutes
              </p>
            </header>
            <div>
              <img src={signature} alt="/" />
            </div>
            <div className="flex flex-row gap-5">
              <Button>Contact us</Button>
              <Button className={styles.button}>View menu</Button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={pepper}
        alt="/"
        className="absolute w-[240px] bottom-[-50px] right-[-50px]"
      />
    </div>
  );
};

export default CertifiedLayer;
