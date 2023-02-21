import React from "react";
import Header from "../../../UI/Header/Header";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import hero_bg from "../TopSection/images/Hero2.jpg";

const Services = () => {
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
      <div className=" max-w-[1100px] mx-auto flex flex-col gap-11">
        <Header title="why react meals?" text_color="text-white" />
        <div className=" w-full grid lg:grid-cols-3 md:grid-cols-2 body-font font-poppins gap-y-20">
          <div className=" flex flex-row text-white  lg:justify-start lg:pl-9 items-center gap-4">
            <span className="w-[50px] h-[50px] rounded-full bg-white"></span>
            <p className="text-xl font-medium">Easy and Convenient</p>
          </div>
          <div className=" flex flex-row text-white  lg:justify-start lg:pl-9 items-center gap-4">
            <span className="w-[50px] h-[50px] rounded-full bg-white"></span>
            <p className="text-xl font-medium">Kosher Supervision</p>
          </div>
          <div className=" flex flex-row text-white  lg:justify-start lg:pl-9 items-center gap-4">
            <span className="w-[50px] h-[50px] rounded-full bg-white"></span>
            <p className="text-xl font-medium">No Commitment</p>
          </div>
          <div className=" flex flex-row text-white  lg:justify-start lg:pl-9 items-center gap-4">
            <span className="w-[50px] h-[50px] rounded-full bg-white"></span>
            <p className="text-xl font-medium">Most 5-Star Reviews</p>
          </div>
          <div className=" flex flex-row text-white  lg:justify-start lg:pl-9 items-center gap-4">
            <span className="w-[50px] h-[50px] rounded-full bg-white"></span>
            <p className="text-xl font-medium">Fresh and Affordable</p>
          </div>
          <div className=" flex flex-row text-white  lg:justify-start lg:pl-9 items-center gap-4">
            <span className="w-[50px] h-[50px] rounded-full bg-white"></span>
            <p className="text-xl font-medium">No Skimpin Chicken!</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
