import React from 'react'
import Wrapper from '../../../UI/Wrapper/Wrapper'
import tomato from './images/tomatoes.png'
import dash from '../../../assets/dash.png'
import Button from '../../../UI/Button/Button'
import styles from '../../../UI/Button/TransparentBtn.module.css'

const MealsSection = () => {
  return (
    <Wrapper bg_color=" bg-white z-10" >
        <div className=' max-w-[1100px] mx-auto px-8'>
        <figure className='w-fit relative -translate-y-[35%] translate-x-6 !mr-0'>
            <img src={tomato} alt="/" className=' w-[220px]' />
        </figure>
        <header className='capitalize body-font font-poppins text-center w-fit mx-auto -translate-y-[100%] '>
            <h5 className='text-4xl text-[var(--secondary)] font-semibold'>Favorite meals</h5>
            <img src={dash} alt='/' className='w-[300px] h-[60px] mt-[-9px]'/>
        </header>
        <div>
          <Button className={styles.button}>all categories</Button>
          <Button className={styles.button}>ketogenic</Button>
          <Button className={styles.button}>low carb</Button>
          <Button className={styles.button}>low calorie</Button>
          <Button className={styles.button}>plant based</Button>
          <Button className={styles.button}>trendy</Button>
        </div>
        </div>
    </Wrapper>
  )
}

export default MealsSection