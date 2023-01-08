import React from 'react'
import Wrapper from '../../../UI/Wrapper/Wrapper'
import hero_bg from './images/Hero2.jpg'

const TopSection = () => {
  return (
    <Wrapper style={{
      backgroundImage: "url(" + hero_bg + ")",
      backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        maxWidth: "100%",
        height: "fit-content",
    }}>
      <div className='max-w-[1100px] mx-auto'>
      <header className=' max-w-[1100px] body-font font-poppins w-[500px] px-4 '>
        <h3 className='capitalize text-white text-6xl font-semibold leading-[1.4]'>A chef in every tasty meal box</h3>
        <p className='text-[#868e96] text-[16px] leading-[1.8]'>Get pre-portioned ingrdients for Gusto Meals Kits best recipes delivered direct to your door!</p>

      </header>
       </div> 
    </Wrapper>
  )
}

export default TopSection