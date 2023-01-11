import React from 'react'
import Button from '../../Button/Button'

const MealCard = ({meal, mealNametop, mealNameBottom, id}) => {
  return (
    <div className='rounded-[2rem] bg-stone-100 w-[220] h-[334.67px] flex flex-col justify-center items-center'>
        <div className='relative overflow-hidden w-full h-full group'>
      <div className='w-[100%] h-[220.06px]'><img src={meal} alt="/" className="mx-auto w-full h-full object-cover"/> </div>
       <div className='capitalize body-font font-poppins font-semibold text-[var(--secondary)] text-xl text-center'>
        <p>{mealNametop}</p>
        <p>{mealNameBottom}</p>
       </div>
       <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <Button>add to cart</Button>
      </div>
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