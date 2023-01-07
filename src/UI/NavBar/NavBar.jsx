import React from 'react'

const NavBar = () => {
  return (
    <div className=' bg-white body-font font-poppins'>
       <div className=' max-w-[1100px] flex bg-white items-center gap-9 h-24 mx-auto'>
       <div className="px-2 w-fit flex flex-row">
           <h3 className=' text-2xl font-semibold text-[var(--primary)]'>React <span className='text-[var(--secondary)]'>Meals</span></h3>
          </div>
          <ul id="unorderedList"
            className="hidden md:flex gap-7 text-sm text-[var(--secondary)]">
            <li className=' border-b-2 border-b-[var(--primary)] font-semibold text-[16px]'><a>Home</a></li>
            <li className=' text-[#868e96] text-[16px]'><a>Menu</a></li>
            <li className=' text-[#868e96] text-[16px]'><a>How it works</a></li>
            <li className=' text-[#868e96] text-[16px]'><a>About</a></li>
            <li className=' text-[#868e96] text-[16px]'><a>FAQS</a></li>
            <li className=' text-[#868e96] text-[16px]'><a>Contact</a></li>
          </ul>
       </div>
    </div>
  )
}

export default NavBar