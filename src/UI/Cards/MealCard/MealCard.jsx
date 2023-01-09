import React from 'react'

const MealCard = ({meal, mealNametop, mealNameBottom }) => {
  return (
    <div className='rounded-[2rem] bg-stone-100 w-fit h-fit py-12'>
       <img src={meal} alt="/"  className='w-[220px]'/>
       <div className=' body-font font-poppins font-semibold text-[var(--secondary)] text-xl text-center'>
        <p>{mealNametop}</p>
        <p>{mealNameBottom}</p>
       </div>
    </div>
  )
}

export default MealCard