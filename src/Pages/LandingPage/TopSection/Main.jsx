import React from "react";
import Button from "../../../UI/Button/Button";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import hero_bg from "./images/Hero2.jpg";
import styles from '../../../UI/Button/TransparentBtn.module.css';

const TopSection = () => {
  return (
    <Wrapper
      style={{
        backgroundImage: "url(" + hero_bg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        maxWidth: "100%",
        height: "fit-content",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className=" w-fit flex flex-col gap-9">
          <header className=" max-w-[1100px] body-font font-poppins w-[500px] px-4 flex flex-col gap-6">
            <h3 className="capitalize text-white text-6xl font-semibold leading-[1.3]">
              A chef in every tasty meal box
            </h3>
            <p className="text-[#868e96] text-[16px] leading-[1.8]">
              Get pre-portioned ingrdients for Gusto Meals Kits best recipes
              delivered direct to your door!
            </p>
          </header>
          <div className="w-fit pl-4 flex flex-row gap-8">
            <Button>Select program </Button>
            <Button className={styles.button}>View Menu </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TopSection;
