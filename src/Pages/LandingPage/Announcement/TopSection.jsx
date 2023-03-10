import React from "react";
import dash from "../../../assets/dash.png";
import AnnouncementCard from "./AnnouncementCard";
import box1 from "./images/box1.png";
import box2 from "./images/box2.png";
import box3 from "./images/box3.png";

const TopSection = () => {
  return (
    <div className="w-full flex flex-col gap-9">
      <header className="capitalize body-font font-poppins text-center w-fit mx-auto">
        <h5
          className="text-4xl text-[var
            (--secondary)] font-semibold max-[410px]:text-2xl"
        >
          Watch it work
        </h5>
        <img src={dash} alt="/" className="w-[300px] h-[60px] mt-[-9px]" />
      </header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[3rem] sm:px-[90px] w-fit mx-auto">
        <AnnouncementCard
          image={box1}
          top_text="choose your meals"
          bottom_text="20+ menus to choose from"
        />
        <AnnouncementCard
          image={box2}
          top_text="we deliver it to you"
          bottom_text="Choose your dates for delivery"
          position="lg:mt-9"
        />
        <AnnouncementCard
          image={box3}
          top_text="cook & enjoy"
          bottom_text="Eat your freshly cooked meal"
        />
      </div>
    </div>
  );
};

export default TopSection;
