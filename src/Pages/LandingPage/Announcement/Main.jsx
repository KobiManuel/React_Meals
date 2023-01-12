import React from "react";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import dash from "../../../assets/dash.png";
import AnnouncementCard from "./AnnouncementCard";
import box1 from "./images/box1.png";
import box2 from "./images/box2.png";
import box3 from "./images/box3.png";
import TopSection from "./TopSection";
const Announcement = () => {
  return (
    <Wrapper bg_color=" bg-stone-100">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-9">
       <TopSection />
      </div>
    </Wrapper>
  );
};

export default Announcement;
