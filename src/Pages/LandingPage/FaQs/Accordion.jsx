import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = () => {
  return (
    <div className=' py-14 px-9 flex flex-row w-fit h-fit bg-stone-100 hover:bg-[var(--secondary)] hover:rounderd-[2rem]'>
        <span>{index}</span>
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
        <span>
            {!open? (
                <AiOutlineMinus size={25} />
            ) : (
                <AiOutlinePlus size={25}/>
            )}
        </span>
    </div>
  )
}

export default Accordion