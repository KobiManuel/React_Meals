import React from 'react'

const TopSection = () => {
  return (
        <div className="w-full flex flex-col gap-9">
        <header className="capitalize body-font font-poppins text-center w-fit mx-auto">
          <h5
            className="text-4xl text-[var
            (--secondary)] font-semibold"
          >
            Watch it work
          </h5>
          <img src={dash} alt="/" className="w-[300px] h-[60px] mt-[-9px]" />
        </header>
        <div className="grid grid-cols-3 gap-[3rem] px-[90px]">
          <AnnouncementCard
            image={box1}
            top_text="choose your meals"
            bottom_text="20+ menus to choose from"
          />
          <AnnouncementCard
            image={box2}
            top_text="we deliver it to you"
            bottom_text="Choose your dates for delivery"
            position="mt-9"
          />
          <AnnouncementCard
            image={box3}
            top_text="ccook & enjoy"
            bottom_text="Eat your freshly cooked meal"
          />
        </div>
      </div>
  )
}

export default TopSection