import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ open, toggle, index, title, description }) => {
  return (
    <div
      onClick={toggle}
      className={
        !open
          ? " transition-all duration-500 ease-in-out delay-150 body-font font-poppins py-9 px-9 flex flex-row  justify-between w-full h-fit bg-stone-100 hover:bg-black hover:rounded-[2rem] border-b-[1px] border-b-gray-300 first:rounded-t-3xl last:rounded-b-3xl"
          : "body-font font-poppins py-9 px-9 flex flex-row  justify-between w-full h-fit bg-black hover:rounded-[2rem] border-b-[1px] border-b-gray-300 first:rounded-t-3xl last:rounded-b-3xl"
      }
    >
      <span className=" text-4xl text-gray-300 font-semibold">{index}</span>
      <div className=" flex flex-col gap-6 w-[500px]">
        <h5
          className={
            !open
              ? "text-[var(--secondary)] text-2xl font-semibold hover:text-white"
              : "text-white text-2xl font-semibold hover:text-white"
          }
        >
          {title}
        </h5>
        <p
          className={
            !open ? "text-gray-300 text-sm hidden" : "text-gray-300 text-sm"
          }
        >
          {description}
        </p>
      </div>
      <span className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
        {!open ? <AiOutlinePlus size={25} /> : <AiOutlineMinus size={25} />}
      </span>
    </div>
  );
};

export default Accordion;
