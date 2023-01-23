import React from 'react'

const ButtonBox = ({color, handleClick}) => {
  return (
    <button style={{backgroundColor:color}} className='box__btn' onClick={handleClick}>&#62;</button>
  )
}

export default ButtonBox