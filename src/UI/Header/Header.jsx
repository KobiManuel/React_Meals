import React from 'react'
import dash from '../../assets/dash2.png'

const Header = ({ title,text_color, position }) => {
  return (
    <header className={`${position} capitalize body-font font-poppins text-center w-fit mx-auto`}>
    <h5 className={`${text_color} text-4xl font-semibold`}>
      {title}
    </h5>
    <img src={dash} alt="/" className="w-[250px] h-[23px]  mx-auto" />
  </header>
  )
}
/* w-[300px] h-[100px] */
export default Header