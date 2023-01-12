import React from 'react'
import Wrapper from '../../../UI/Wrapper/Wrapper'
import dash from '../../../assets/dash.png'
import AnnouncementCard from './AnnouncementCard'

const Announcement = () => {
  return (
    <Wrapper bg_color=" bg-stone-200">
    <div className='max-w-[1100px] mx-auto'>
    <header className="capitalize body-font font-poppins text-center w-fit mx-auto">
          <h5 className="text-4xl text-[var
            (--secondary)] font-semibold">
            Watch it work
          </h5>
          <img src={dash} alt="/" className="w-[300px] h-[60px] mt-[-9px]" />
        </header>
        <div className='grid grid-cols-3'>
           {}
        </div>
    </div>
    </Wrapper>
  )
}

export default Announcement