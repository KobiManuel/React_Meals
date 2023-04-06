import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ open, toggle, index, title, description, id }) => {
  return (
    <div
      onClick={toggle}
      className={
        !open
          ? " group transition-all duration-500 ease-in-out delay-150 body-font font-poppins py-9 px-9 flex flex-row  justify-between w-full h-fit bg-stone-100 hover:bg-black hover:rounded-[2rem] border-b-[1px] border-b-gray-300 first:rounded-t-3xl last:rounded-b-3xl cursor-pointer"
          : "body-font font-poppins transition-all duration-500 ease-in-out delay-150  py-9 px-9 flex flex-row  justify-between w-full h-fit bg-black hover:rounded-[2rem] border-b-[1px] border-b-gray-300 first:rounded-t-3xl last:rounded-b-3xl rounded-[2rem] cursor-pointer "
      }
    >
      <span className=" text-4xl text-[#868e96] font-semibold max-[826px]:text-2xl">
        {id}
      </span>
      <div className=" flex flex-col gap-6 w-[500px] max-[826px]:w-[400px] max-[692px]:w-[250px] max-[443px]:w-[190px] max-[367px]:w-[150px] ">
        <h5
          className={
            !open
              ? "text-[var(--secondary)] text-2xl max-[692px]:text-[15px] max-[826px]:text-1xl font-semibold hover:text-white group-hover:text-white"
              : "text-white text-2xl max-[692px]:text-[15px] max-[826px]:text-1xl font-semibold hover:text-white"
          }
        >
          {title}
        </h5>
        <p
          className={
            !open
              ? "text-gray-300 text-sm hidden max-[826px]:text-xs"
              : "text-gray-300 text-sm max-[826px]:text-xs"
          }
        >
          {description}
        </p>
      </div>
      <span className="w-[50px] h-[50px] max-[826px]:w-[25px] max-[826px]:h-[25px] rounded-full bg-white flex items-center justify-center">
        {!open ? (
          <AiOutlinePlus size={25} className=" max-[826px]:w-[15px]" />
        ) : (
          <AiOutlineMinus size={25} className=" max-[826px]:w-[15px]" />
        )}
      </span>
    </div>
  );
};

export default Accordion;
