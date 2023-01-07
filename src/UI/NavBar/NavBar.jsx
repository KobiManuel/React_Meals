import React from 'react'

const NavBar = () => {
  return (
    <div className=' bg-white body-font font-poppins'>
       <div className=' max-w-[1100px] flex bg-white items-center justify-between h-24 mx-auto'>
       <div className="px-2 w-fit flex flex-row">
           <h3 className=' text-2xl font-semibold text-[var(--primary)]'>React <span className='text-[var(--secondary)]'>Meals</span></h3>
          </div>
          
       </div>
    </div>
  )
}

export default NavBar