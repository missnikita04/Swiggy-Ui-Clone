import React from 'react'

function Cartfood(props) {
  return (
     
    <div className=' relative w-[200px] h-[70px] border border-gray-400 rounded-2xl relative top-4  items-center justify-center'>
     
      <h2 className='text-gray-700 text-md font-bold  '>Order food online <br />in {props.city} </h2>
    </div>
  )
}

export default Cartfood;
