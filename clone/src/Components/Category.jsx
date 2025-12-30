import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { BiRightArrowCircle } from "react-icons/bi";
import { BiLeftArrowCircle } from "react-icons/bi";
import Navbar1 from './Navbar1';
import {foodData} from "../assets/assest";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function Category() {
    const [input , setInput]=useState("");
    const [slide,setSlide]=useState(0);
    const [Category, setCategory]=useState([]);
    const navigate=useNavigate();
    const fetchData=async()=>{
        const res=await fetch("http://localhost:5000/categories");
        const data=await res.json();
        setCategory(data);


    }
    useEffect(()=>{
        fetchData();

    },[])
    const prevSlide=()=>{
        if(Category.length-8==slide) return false;
        setSlide(slide+3);

    }
     const nextSlide=()=>{
                if(slide==0) return false;

        setSlide(slide-3);
        
    }


    const filteredCategory=(
        foodData.filter((items)=>
            items.name.toLowerCase().includes(input.toLowerCase())
        )
    )
  return (
    <>
    <Navbar1/>

    <div className="w-full min-h-screen">
    {/* searhc bar */}
 <div className="flex items-center justify-center  h-60">
      <div className="w-[1000px] h-15 bg-white flex items-center gap-3 px-10  
                      border text-gray-400
                      focus-within:shadow-xl transition">

        <FiSearch className="text-gray-400 text-lg" />

        <input
          type="text"
          placeholder="Search for restaurants, dishes or cuisines"
          className="w-full outline-none text-gray-700 text-l"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <MdOutlineCancel size={28} 
         className="text-gray-500 cursor-pointer hover:text-black"
         onClick={()=>setInput("")} />
      </div>
    </div>
    {/* making slide steps

    1=get data from api
    2= make it overflow hidden 
    3 make button to slide
    4rth withpur any carousel onyl use tranform to slide img by -px translate propertyy
    
    */}


    {/* if user type somehting show list of item */}

    {input && (
         <div className="bg-white w-[1000px] mx-auto shadow-md rounded">
    {filteredCategory.length > 0 ? (
      filteredCategory.map((item, index) => (

<div
  key={index}
  onClick={()=>{if(item.category){
    navigate(`/searchQuery/${item.category}`)}
}}
  className="w-[100%] mx-auto flex items-center gap-4 
             px-4 py-3 bg-white
             hover:bg-gray-100 cursor-pointer 
             rounded-lg transition"
>
  {/* Image */}
  <div className="w-[70px] h-[70px] flex-shrink-0">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Item Name */}
  <div className="flex-1 flex items-center">
    <p className="text-gray-800 font-medium">
      {item.name}
    </p>
  </div>
</div>      ))
    ) : (
      <div className="px-4 py-2 text-gray-400">
        No results found
      </div>
    )}
  </div>


    )}
    
    {/* items carousel*/}
        {/* slide arrrow */}
    { !input &&(  
        <>
    <div className='flex justify-between  m-4' >
    <div className='text-2xl font-bold '>  Popular Cuisines</div>
    <div className='flex text-3xl text-[#ff5200] '>
        <BiLeftArrowCircle onClick={nextSlide}  />
    <BiRightArrowCircle onClick={prevSlide} />

    </div>

    </div>  


   
    <div className='flex z-0  overflow-hidden relative'>
        {
            Category.map((cate,index)=>{
                return( <div
                style={{transform:`translateX(-${slide *100}%`}}
                
                key={index} className='w-[150px] shrink-0  duration-500 z-0'>
                    <img src={"http://localhost:5000/images/"+cate.image} alt="" />
                    </div>)
               


            })
        }
    </div>
    
    <hr  className='my-4 border border-[3px] text-gray-300'/>
 </>
  )}
</div>
    </>  )
}

export default Category
