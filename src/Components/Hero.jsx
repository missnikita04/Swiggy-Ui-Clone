import React from "react";
import  { useState, useEffect } from "react";

import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { BiRightArrowCircle } from "react-icons/bi";
import { BiLeftArrowCircle } from "react-icons/bi";
import TopRest from "../Components/TopRest"
import Footer from "../Components/Footer"
import News from "../Components/News"
import Cartfood from "./Cartfood";
import CardGrocery from "./CardGrocery";

function Hero() {
        const [slide,setSlide]=useState(0);
      const [Category, setCategory]=useState([]);
const visibleItems = 8;

  const links = [
    { name: "Swiggy Corporate" },
    { name: "Partner with us" },
    { name: "Get the app" },
    { icon: <FaRegUser /> },
  ];

  const cart = [
    {
      h: "FOOD DELIVERY",
      sh: "FROM RESTAURANTS",
      P: "UPTO 60% OFF",
      btn: "Explore →",
    },
    {
      h: "DINEOUT",
      sh: "EAT OUT & SAVE MORE",
      P: "UPTO 50% OFF",
      btn: "Explore →",
    },
  ];
      const fetchData=async()=>{
          const res=await fetch("http://localhost:5000/categories");
          const data=await res.json();
          setCategory(data);
  
  
      }
      useEffect(()=>{
          fetchData();
  
      },[])
const nextSlide = () => {
  if (slide >= Category.length - visibleItems) return;
  setSlide(slide + 1);
};

const prevSlide = () => {
  if (slide <= 0) return;
  setSlide(slide - 1);
};

const foodData=[
  { city:"Hyderabad"},
    { city:"Banglore"},
  { city:"Gurgaon"},
  { city:"Pune"},
  { city:"Mumbai"},
  { city:"Ahmedabad"},
  { city:"Chandigarh"},
  { city:"Delhi"},
  { city:"Chennai"},
  { city:"Kolkat"},
  { city:"Jaipur"},
   { city:"Kota"}


]
  
  

  return (
    <>
    <section className=" min-h-[800px] bg-[#ff5200] py-24  relative">

      {/* NAVBAR */}
      <div className="h-[130px] flex justify-between items-center px-8">
        <div className="w-[100px]">
          <img
            src="images/swiggy_logo_white.avif"
            alt="Swiggy"
            className="w-full"
          />
        </div>

        <nav className="flex gap-6 text-white font-semibold text-lg">
          {links.map((item, i) => (
            <div key={i} className="flex items-center gap-1 cursor-pointer">
              {item.icon} {item.name}
            </div>
          ))}
        </nav>
      </div>

      {/* HERO AREA */}
      <div className="relative w-full flex flex-col items-center pt-20">

        {/* LEFT IMAGE */}
        <img
          src="images/Veggies_new.avif"
          alt="Veggies"
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[280px]"
        />

        {/* RIGHT IMAGE */}
        <img
          src="images/Sushi_replace.avif"
          alt="Sushi"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[280px]"
        />

        {/* CENTER CONTENT */}
<div className="text-white text-center z-10 px-4 max-w-4xl mt-16">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
    Order food. Discover best <br />
    restaurants. Swiggy it!
  </h1>

  {/* SEARCH */}
  <div className="pt-12 flex flex-col md:flex-row gap-6 justify-center relative top-10">
    <div className="w-full md:w-[320px] bg-white flex items-center gap-2 px-4 py-3 rounded-2xl">
      <IoLocationOutline className="text-gray-400 text-2xl" />
      <input
        type="text"
        placeholder="Enter your delivery location"
        className="w-full h-[50px] outline-none text-gray-700 font-semibold"
      />
    </div>

    <div className="w-full md:w-[320px] bg-white flex items-center gap-2 px-4 py-3 rounded-2xl">
      <FiSearch className="text-gray-400 text-2xl" />
      <input
        type="text"
        placeholder="Search for restaurants, items or more"
        className="w-full h-[50px] outline-none text-gray-700 font-semibold"
      />
    </div>
  </div>
</div>

        {/* CARDS */}
<div className="pt-24 flex flex-col md:flex-row gap-10 justify-center z-10 px-4 relative top-20 ">
          {cart.map((item, index) => (
            <div
              key={index}
              className="w-[550px] h-[320px] bg-white rounded-3xl p-8 flex flex-col gap-15 shadow-lg"
            >
              <div>
                <h1 className="text-gray-800 font-bold text-5xl relative left-6 top-5">
                  {item.h}
                </h1>
                <h2 className="text-gray-500 text-2xl font-semibold relative left-6 top-5">
                  {item.sh}
                </h2>
              </div>

              <div className="w-fit  py-1 bg-gray-200 rounded-full relative left-6 ">
                <p className="text-[#ff5200] font-bold text-xl">
                  {item.P}
                </p>
              </div>

              <button className="w-[140px] h-[40px] relative left-5 top-3 px-6 py-2 bg-[#ff5200] rounded-full text-white font-semibold text-xl">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* // product section */}
       <div className="w-full h-[400px]">
        <div className='flex justify-between  m-4 h-[70px] relative top-10  ' >
        <div className='text-2xl font-bold '>  Popular Cuisines</div>
        <div className='flex text-3xl text-[#ff5200] '>
            <BiLeftArrowCircle onClick={prevSlide}  />
        <BiRightArrowCircle onClick={nextSlide} />
    
        </div>
    
        </div>
    
    
        
        <div className='flex z-0  overflow-hidden relative top-10'>
            {
                Category.map((cate,index)=>{
                    return( <div
                    style={{transform:`translateX(-${slide *100}%`}}
                    
                    key={index} className='w-[150px] shrink-0  duration-700 z-0'>
                        <img src={"http://localhost:5000/images/"+cate.image} alt="" />
                        </div>)
                   
    
    
                })
            }
        </div>
        <div className='flex z-0  overflow-hidden relative top-10'>
            {
                Category.map((cate,index)=>{
                    return( <div
                    style={{transform:`translateX(-${slide *100}%`}}
                    
                    key={index} className='w-[150px] shrink-0   duration-700 z-0'>
                        <img src={"http://localhost:5000/images/"+cate.image} alt="" />
                        </div>)
                   
    
    
                })
            }
        </div>
        </div>
        <hr  className='my-4 border border-[3px] text-gray-300'/>
    
    

<TopRest/>
<News/>

{/* cart for foood delivery */}
<div className="h-[500px] relative  flex flex-col items-center justify-center text-center ">
<h1 className=" w-full font-bold text-3xl text-gray-800">Cities with food delivery</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 max-w-5xl">
  {foodData.map((fd,idx)=>{
    return(
          <Cartfood  {...fd}  key={idx}/>
    )
  })}
</div>
</div>

{/* cart for Grocery delivery */}
<div className="h-[500px] relative  flex flex-col items-center justify-center text-center ">
<h1 className=" w-full font-bold text-3xl text-gray-900">Cities with Grocery delivery</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 max-w-5xl">
  {foodData.map((fd,idx)=>{
    return(
          <CardGrocery  {...fd}  key={idx}/>
    )
  })}
</div>
</div>



<Footer/>
</>

  );
}

export default Hero;
