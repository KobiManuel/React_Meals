import React from 'react'
import dash from '../../assets/dash.png'

const Header = () => {
  return (
    <header className="capitalize body-font font-poppins text-center w-fit mx-auto -translate-y-[100%] ">
    <h5 className="text-4xl text-[var(--secondary)] font-semibold">
      Favorite meals
    </h5>
    <img src={dash} alt="/" className="w-[300px] h-[60px] mt-[-9px]" />
  </header>
  )
}

export default Header