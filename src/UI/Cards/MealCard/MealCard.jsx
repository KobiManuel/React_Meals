import React from 'react'

const MealCard = ({meal, mealNametop, mealNameBottom, id}) => {
  return (
    <div className='rounded-[2rem] bg-stone-100 w-[220] h-[334.67px] flex flex-col justify-center items-center'>
      <div className='w-[100%] h-[220.06px]'><img src={meal} alt="/" className="mx-auto w-full h-full object-cover" /> </div>
       <div className='capitalize body-font font-poppins font-semibold text-[var(--secondary)] text-xl text-center'>
        <p>{mealNametop}</p>
        <p>{mealNameBottom}</p>
       </div>
    </div>
  )
}
/* const MealCard = ({meal, mealNametop, mealNameBottom, img_width }) => {
  return (
    <div className='rounded-[2rem] bg-stone-100 w-[220] h-[334.67px] flex flex-col justify-center items-center'>
      <div className='w-[100%] h-[220.06px]'><img src={meal} alt="/" className={`${img_width} mx-auto w-full h-full object-cover`}/> </div>
       <div className='capitalize body-font font-poppins font-semibold text-[var(--secondary)] text-xl text-center'>
        <p>{mealNametop}</p>
        <p>{mealNameBottom}</p>
       </div>
    </div>
  )
}  */
export default MealCard