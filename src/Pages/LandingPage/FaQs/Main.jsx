import React from "react";
import Button from "../../../UI/Button/Button";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import Accordion from "./Accordion";
import { AccordionData } from "./AccordionData";

const FaQs = () => {
  return (
    <Wrapper bg_color="bg-white">
      <div className=" max-w-[1100px] mx-auto px-12 body-font font-poppins flex flex-col gap-[5rem]">
        <header className="flex flex-row justify-between items-center gap-[9rem]">
          <h3 className="capitalize text-4xl text-[var(--secondary)] font-semibold ">
            frequently asked questions
          </h3>
          <p className=" text-sm text-gray-400">
            Check out frequently asked questions for answers
          </p>
          <Button>Contact us</Button>
        </header>
        <div className="flex flex-col">
            {AccordionData.map(({ index, title, description }) => (
                <Accordion index={index} title={title} description={description} />
            ) )}
        </div>
      </div>
    </Wrapper>
  );
};

export default FaQs;
