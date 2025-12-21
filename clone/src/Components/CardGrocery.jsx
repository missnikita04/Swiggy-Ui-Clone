import React from 'react'

function CardGrocery(props) {
  return (
     
    <div className=' relative w-[200px] h-[70px] border border-gray-400 rounded-2xl relative   flex items-center justify-center'>
     
      <h2 className='text-gray-700 text-md font-bold  '> {props.name} </h2>
    </div>
  )
}

export default CardGrocery;
