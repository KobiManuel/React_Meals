import React from 'react'
import footer_bg from '../TopSection/images/Hero2.jpg'

const MainFooter = () => {
  return (
    <div className='relative'>
    <div style={{
        backgroundImage: "url(" + footer_bg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        width: "100%",
        maxWidth: "100%",
        height: "500px"
      }} className="absolute before:content-[''] before:absolute before:brightness-[0.30] z-[-1]"> </div>
       <div className=' max-w-[1100px] mx-auto body-font font-poppins py-[96px]'>
           <div className=' grid grid-cols-5 justify-center items-center'>
           <div className="pl-2 w-fit flex flex-row">
          <h3 className=" text-2xl font-semibold text-[var(--primary)]">
            React <span className="text-white">Meals</span>
          </h3>
        </div>

           </div>
       </div>
    </div>
  )
}

export default MainFooter