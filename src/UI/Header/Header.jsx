import React from 'react'
import dash from '../../assets/dash.png'

const Header = ({ title,text_color }) => {
  return (
    <header className="capitalize body-font font-poppins text-center w-fit mx-auto -translate-y-[100%] ">
    <h5 className={`${text_color} text-4xl font-semibold`}>
      {title}
    </h5>
    <img src={dash} alt="/" className="w-[300px] h-[60px] mt-[-9px]" />
  </header>
  )
}

export default Header