import React from 'react'
import MainFooter from './MainFooter'
import plant2 from './images/lastPlant.png'
import FooterFloat from './FooterFloat'

const Footer = () => {
  return (
    <div className='relative'>
        <img src={plant2} alt="/" className='w-[200px] object-cover relative left-[-20px] ' />
        <MainFooter />
        <FooterFloat />
    </div>
  )
}

export default Footer