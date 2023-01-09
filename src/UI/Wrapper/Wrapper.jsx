import React from "react";

const Wrapper = (props) => {
  return (
    <div
      id={props.id}
      className={`py-[96px] ${props.bg_color} relative`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
