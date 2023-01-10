import React from "react";
import Button from "../../../UI/Button/Button";
import hero_bg from "./images/Hero2.jpg";
import styles from "../../../UI/Button/TransparentBtn.module.css";
import pan from "./images/pan.png";

const TopSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + hero_bg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        maxWidth: "100%",
        height: "500px",
      }}
    >
      <div className=" mx-auto flex flex-row h-fit">
        <div className=" w-fit h-fit flex flex-col gap-9 pl-[65px] justify-self-center self-center">
          <header className=" max-w-[1100px] body-font font-poppins w-[500px] px-4 flex flex-col gap-6">
            <h3 className="capitalize text-white text-6xl font-semibold leading-[1.3]">
              A chef in every tasty meal box
            </h3>
            <p className="text-[#868e96] text-[16px] leading-[1.8]">
              Get pre-portioned ingredients for React Meals Kits's best recipes
              delivered direct to your door!
            </p>
          </header>
          <div className="w-fit pl-4 flex flex-row gap-8">
            <Button>Select program </Button>
            <Button className={styles.button}>View Menu </Button>
          </div>
        </div>
        <div className=" w-fit z-50">
          <img src={pan} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
