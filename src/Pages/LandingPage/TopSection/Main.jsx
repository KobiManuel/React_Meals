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
      <header className=' max-w-[1100px] mx-auto body-font font-poppins'>
        <h3>A chef in every tasty meal box</h3>
        <p>Get pre-portioned ingrdients for Gusto Meals Kits best recipes delivered direct to your door!</p>

      </header>
        
    </Wrapper>
  )
}

export default TopSection