import React from 'react'
import float_img from './images/float_img3.jpg'

const FooterFloat = () => {
  return (
    <div className=' w-[70%] h-[260px] mx-auto rounded-[2rem] absolute z-50 top-[2rem] translate-x-[22%]'>
        <div className='relative rounded-[2rem]'>
            <div style={{
        backgroundImage: "url(" + float_img + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        maxWidth: "100%",
        height: "260px"
      }} className="absolute before:content-[''] before:absolute brightness-[0.30] z-[-1] rounded-[2rem]"  ></div></div>
        
    </div>
  )
}

export default FooterFloat