import React from "react";
import NavBar from "../../UI/NavBar/NavBar";
import Announcement from "./Announcement/Main";
import FaQs from "./FaQs/Main";
import MealsSection from "./MealsSection/Main";
import Services from "./Services/Main";
import TopSection from "./TopSection/Main";
import Footer from "./Footer/Main";

const Index = () => {
  return (
    <>
      <NavBar />
      <TopSection />
      <MealsSection />
      <Services />
      <Announcement />
      <FaQs />
      <Footer />
    </>
  );
};

export default Index;
