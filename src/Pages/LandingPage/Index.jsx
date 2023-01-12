import React from "react";
import NavBar from "../../UI/NavBar/NavBar";
import Announcement from "./Announcement/Main";
import MealsSection from "./MealsSection/Main";
import Services from "./Services/Main";
import TopSection from "./TopSection/Main";

const Index = () => {
  return (
    <>
      <NavBar />
      <TopSection />
      <MealsSection />
      <Services />
      <Announcement />
      
    </>
  );
};

export default Index;
