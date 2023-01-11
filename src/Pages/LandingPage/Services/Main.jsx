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
      <div className=" max-w-[1100px] mx-auto">
        <Header title="why react meals?" text_color="text-white" />
        <div className=" w-full grid grid-cols-3 body-font font-poppins">
          <div>
            <span className="w-[20px] h-[20px] rounded-full bg-white"></span>
            <p className="text-2xl font-semibold">Easy and Convenient</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
