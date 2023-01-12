import React from "react";

const AnnouncementCard = ({ image, top_text, bottom_text }) => {
  return (
    <div className="bg-white py-9 h-[400px] rounded-[2rem] flex flex-col justify-center items-center gap-4 px-2">
      <figure className="w-[100%] h-fit">
        <img
          src={image}
          alt="/"
          className=" w-full h-full object-cover mx-auto"
        />
      </figure>
      <div className="body-font font-poppins text-center">
        <p className="capitalize text-[var(--secondary)] text-lg font-semibold">
          {top_text}
        </p>
        <p className="text-[#868e96] text-sm font-semibold ">{bottom_text}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
