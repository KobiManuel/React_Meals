import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, type, className, onClick }) => {
  return (
    <button className={`${styles.button} ${className} font-medium body-font font-poppins`}>
      {children}
      <span></span><span></span><span></span><span></span>
    </button>
  )
}

export default Button