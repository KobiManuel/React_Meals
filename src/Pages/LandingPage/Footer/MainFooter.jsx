import React from 'react'
import footer_bg from '../TopSection/images/Hero2.jpg'

const MainFooter = () => {
  return (
    <div  style={{
        backgroundImage: "url(" + footer_bg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        maxWidth: "100%",
        height: "500px",
      }}>

    </div>
  )
}

export default MainFooter