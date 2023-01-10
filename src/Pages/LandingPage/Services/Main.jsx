import React from 'react'
import Wrapper from '../../../UI/Wrapper/Wrapper'
import hero_bg from '../TopSection/images/Hero2.jpg'


const Services = () => {
  return (
    <Wrapper style={{
        backgroundImage: "url(" + hero_bg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        maxWidth: "100%",
        height: "500px",
      }}>

    </Wrapper>
  )
}

export default Services