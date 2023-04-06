import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import Accordion from "./Accordion";
import { AccordionData } from "./AccordionData";

const FaQs = () => {
  const [open, setOpen] = useState(0);
  const toggle = (index) => {
    if (open === index) {
      setOpen(false);
    } else if (open === null) {
      setOpen(!open);
    } else {
      setOpen(index);
    }
  };
  return (
    <Wrapper bg_color="bg-white">
      <div className=" max-w-[1100px] mx-auto px-12 max-[581px]:px-2 body-font font-poppins flex flex-col gap-[5rem]">
        <header className="flex flex-row max-[759px]:flex-col max-[759px]:gap-3 justify-between items-center min-[1042px]:gap-[9rem] max-[1042px]:gap-[5rem] max-[977px]:gap-[2rem] max-[881px]:gap-0">
          <h3 className="capitalize max-[373px]:text-center text-4xl text-[var(--secondary)] font-semibold max-[881px]:w-fit max-[817px]:text-3xl max-[538px]:text-2xl">
            frequently asked questions
          </h3>
          <p className=" text-sm text-[#868e96] font-medium max-[881px]:w-fit max-[373px]:text-center ">
            Check out frequently asked questions for answers
          </p>
          <Button>Contact us</Button>
        </header>
        <div className="flex flex-col">
          {AccordionData.map((data, index) => (
            <Accordion
              key={index}
              open={index === open}
              title={data.title}
              description={data.description}
              toggle={() => toggle(index)}
              id={data.id}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default FaQs;
