import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { BiRightArrowCircle } from "react-icons/bi";
import { BiLeftArrowCircle } from "react-icons/bi";
function Category() {
    const [slide,setSlide]=useState(0);
    const [Category, setCategory]=useState([]);
    const fetchData=async()=>{
        const res=await fetch("http://localhost:5000/categories");
        const data=await res.json();
        setCategory(data);


    }
    useEffect(()=>{
        fetchData();

    },[])
    const prevSlide=()=>{
        if(Category.length-8 ==slide) return false;
        setSlide(slide+3);

    }
     const nextSlide=()=>{
                if(slide==0) return false;

        setSlide(slide-3);
        
    }


  return (
    <>
    <div className="w-full min-h-screen">
    {/* searhc bar */}
 <div className="flex items-center justify-center  h-60">
      <div className="w-[600px] h-15 bg-white flex items-center gap-3 px-10 py-20 
                      border text-gray-500
                      focus-within:shadow-xl transition">

        <FiSearch className="text-gray-400 text-lg" />

        <input
          type="text"
          placeholder="Search for restaurants, dishes or cuisines"
          className="w-full outline-none text-gray-700 text-l"
        />
      </div>
    </div>
    {/* making slide steps

    1=get data from api
    2= make it overflow hidden 
    3 make button to slide
    4rth withpur any carousel onyl use tranform to slide img by -px translate propertyy
    
    */}
    
    {/* items carousel*/}
        {/* slide arrrow */}
    <div className='flex justify-between  m-4' >
    <div className='text-2xl font-bold '>  Popular Cuisines</div>
    <div className='flex text-3xl text-[#ff5200] '>
        <BiLeftArrowCircle onClick={prevSlide}  />
    <BiRightArrowCircle onClick={nextSlide} />

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
</div>
    </>  )
}

export default Category
