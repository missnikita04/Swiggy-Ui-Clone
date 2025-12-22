import React from 'react'
import Navbar1 from './Navbar1'
import { useNavigate } from 'react-router-dom'


function Cart() {
    const navigate=useNavigate()
  return (
    <div>
      <Navbar1/>
      <div className='flex justify-center   '>
        <div className='text-center   relative mt-[200px] '>
            <h1 className='font-bold text-gray-800 text-3xl'>Your Cart is empty</h1>
            <p className='text-gray-500 text-md font-semibold'>You can go to home page to view more restaurants</p>
        </div>
        </div>
        <div className='flex justify-center mt-6'>
        <div className='w-[300px] h-[45px] bg-[#ff5200] text-white font-bold flex justify-center'>
            <button className='text-center text-lg ' onClick={()=>navigate("/")} >See restaurants near you</button>
        </div>

        </div>
      
    </div>
  )
}

export default Cart
