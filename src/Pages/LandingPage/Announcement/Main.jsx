import React from "react";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import CertifiedLayer from "./CertifiedLayer";
import TopSection from "./TopSection";
const Announcement = () => {
  return (
    <Wrapper bg_color=" bg-stone-100">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-9">
       <TopSection />
       <CertifiedLayer />
      </div>
    </Wrapper>
  );
};

export default Announcement;
