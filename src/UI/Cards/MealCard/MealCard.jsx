import React from 'react'
import bowl1 from '../../../Pages/LandingPage/MealsSection/images/bowl1.png'

const MealCard = () => {
  return (
    <div className='rounded-[2rem] bg-stone-100 w-fit h-fit py-12'>
       <img src={bowl1} alt="/"  className='w-[220px]'/>
       <div className=' body-font font-poppins font-semibold text-[var(--secondary)] text-xl text-center'>
        <p>Grilled</p>
        <p>Chicken Parmesan</p>
       </div>
    </div>
  )
}

export default MealCard