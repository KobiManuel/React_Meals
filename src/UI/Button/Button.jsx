import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, type, className, onClick }) => {
  return (
    <button
    onClick={onClick}
      className={`${styles.button} ${className} font-medium body-font font-poppins`}
    >
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Button;
