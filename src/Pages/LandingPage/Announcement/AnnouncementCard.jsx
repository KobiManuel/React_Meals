import React from 'react'

const AnnouncementCard = () => {
  return (
    <div className='bg-white'>
    <figure className='w-full h-[220.06px]'>
        <img src='box1' alt='/' className=' w-full h-full object-cover' />
    </figure>
    <div className='body-font font-poppins'>
        <p className='capitalize text-[var(--secondary)] text-lg'>Choose your meals</p>
       <p className='text-[#868e96] text-sm '>20+ menus to choose from</p>
    </div>


    </div>
  )
}

export default AnnouncementCard