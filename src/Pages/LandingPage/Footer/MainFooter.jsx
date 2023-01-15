import React from 'react'
import footer_bg from '../TopSection/images/Hero2.jpg'
import signature from '../Announcement/images/signature.png'

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
            <header className=' flex flex-col gap-8'>
           <div className="pl-2 w-fit flex flex-row">
          <h3 className=" text-2xl font-semibold text-[var(--primary)]">
            React <span className="text-white">Meals</span>
          </h3>
          <div>
              <img src={signature} alt="/" />
            </div>
        </div>
          <div className='pl-2 flex flex-col gap-6'>
            <p className=' text-stone-200 text-xs'>The fictional Address of the React Meals Kit made up in KobiLand</p>
            <div className='flex flex-row gap-5'>
                <span className=' w-[40px] h-[40px] rounded-full bg-white'></span>
                <span  className=' w-[40px] h-[40px] rounded-full  bg-white'></span>
                <span  className=' w-[40px] h-[40px] rounded-full bg-white'></span>
            </div>
          </div>
             </header>
           </div>
       </div>
    </div>
  )
}

export default MainFooter