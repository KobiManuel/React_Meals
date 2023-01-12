import React from 'react'
import Button from '../../../UI/Button/Button'
import styles from '../../../UI/Button/TransparentBtn.module.css'
import bowl from './images/true_transparent.png'
import plant from './images/firstPlant.png'
import signature from './images/signature.png'
const CertifiedLayer = () => {
  return (
    <div  className='w-full relative'>
         <img src={plant} alt="/" className='absolute' />
        <div className='grid grid-cols-2'>
        <div>
            <img src={bowl} alt="/" />
        </div>
        <div className=' body-font font-poppins'>
          <header>
            <h3 className='text-4xl text-[var
            (--secondary)] font-semibold' >We Deliver Anywhere in the Tri-State Area</h3>
            <p className='text-[#868e96] text-sm'>Each React Meal is perfectly sized for one person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes</p>
          </header>
          <div>
            <img src={signature} alt="/" />
          </div>
          <div className='flex flex-row gap-5'>
            <Button>Contact us</Button>
            <Button style={styles.button}>View menu</Button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default CertifiedLayer