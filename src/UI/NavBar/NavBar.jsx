import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className=' bg-white body-font font-poppins'>
       <div className=' max-w-[1100px] flex bg-white items-center justify-between gap-9 h-24 mx-auto'>
       <div className="px-2 w-fit flex flex-row">
           <h3 className=' text-2xl font-semibold text-[var(--primary)]'>React <span className='text-[var(--secondary)]'>Meals</span></h3>
          </div>
          <ul id="unorderedList"
            className="hidden md:flex gap-7 text-sm text-[var(--secondary)]">
            <li className=' border-b-2 border-b-[var(--primary)] font-semibold text-[15px]'><a>Home</a></li>
            <li className=' text-[#868e96] text-[15px]'><a>Menu</a></li>
            <li className=' text-[#868e96] text-[15px]'><a>How it works</a></li>
            <li className=' text-[#868e96] text-[15px]'><a>About</a></li>
            <li className=' text-[#868e96] text-[15px]'><a>FAQS</a></li>
            <li className=' text-[#868e96] text-[15px]'><a>Contact</a></li>
          </ul>
          <div className='w-fit text-white font-semibold'>
            <button className=' rounded-full bg-[var(--primary)] px-12 py-2 flex flex-row justify-between'><AiOutlineShoppingCart /> Your Cart<span className=' bg-orange-800 rounded-full px-4'>0</span></button>
          </div>
       </div>
    </div>
  )
}

export default NavBar