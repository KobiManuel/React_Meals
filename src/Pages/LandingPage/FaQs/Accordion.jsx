import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ index, title, description }) => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(!false)
    }
  return (
    <div onClick={openHandler} className="body-font font-poppins py-14 px-9 flex flex-row justify-center items-center w-fit h-fit bg-stone-100 hover:bg-[var(--secondary)] hover:rounderd-[2rem]">
      <span className=" text-4xl text-gray-300 font-semibold">{index}</span>
      <div className=" flex flex-col gap-6">
        <h5 className="text-[var(--primary)] text-3xl hover:text-white font-semibold">{title}</h5>
        <p className=" text-gray-300 text-sm">{description}</p>
      </div>
      <span className="w-[50px] h-[50px] rounded-full bg-white text-center">
        {!open ? <AiOutlineMinus size={25} /> : <AiOutlinePlus size={25} />}
      </span>
    </div>
  );
};

export default Accordion;
