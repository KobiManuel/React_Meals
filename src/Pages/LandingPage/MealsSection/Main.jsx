import React from 'react'
import Wrapper from '../../../UI/Wrapper/Wrapper'
import tomato from './images/tomatoes.png'

const MealsSection = () => {
  return (
    <Wrapper bg_color=" bg-white" >
        <figure>
            <img src={tomato} alt="/" />
        </figure>
    </Wrapper>
  )
}

export default MealsSection