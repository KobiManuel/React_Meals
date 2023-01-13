import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = () => {
  return (
    <div className="body-font font-poppins py-14 px-9 flex flex-row justify-center items-center w-fit h-fit bg-stone-100 hover:bg-[var(--secondary)] hover:rounderd-[2rem]">
      <span className=" text-4xl text-gray-300 font-semibold">{index}</span>
      <div className=" flex flex-col gap-6">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <span>
        {!open ? <AiOutlineMinus size={25} /> : <AiOutlinePlus size={25} />}
      </span>
    </div>
  );
};

export default Accordion;
