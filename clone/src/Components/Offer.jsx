import React from "react";
import Navbar1 from "./Navbar1";
import { NavLink } from "react-router-dom";
import TopRest from "./TopRest";
import OrderOnline from "./OrderOnline";


function Offer() {
  return (
    <>
      <Navbar1 />
      {/* image  */}
      <div className="flex justify-center  mt-[40px]">
        <div className="relative">
          <img
            src="images/DO_collectionBanner.avif"
            alt=""
            className=" object-cover w-full h-full rounded-3xl"
          />
          <h1 className="absolute top-1/2 left-10 -translate-y-1/4 text-white text-2xl  font-semibold">
            Restuarant With Great <br /> Offer Near Me
          </h1>
        </div>
       
      </div>
               <div  className=" text-2xl font-semibold flex gap-4 cursor-pointer text-gray-600 mt-12 mb-2 px-20 ">
            <NavLink
             to="/OrderOnline"
              className={({isActive})=>
                isActive ?"text-black font-bold":"text-gray-500"
            } > 
            Order Online 
            </NavLink>
         <NavLink to="/discount" className={({isActive})=>
            isActive ?"text-black font-bold":"text-gray-500"
         } > Dineout</NavLink>

        </div>
        <div>
            
        </div>
        <div className="relative "> 
                <hr  className=" border border-[1px] text-gray-300 max-w-[1400px] w-full mx-auto"/>


        </div>
        <div className=" relative w-[1400px] mx-auto">
            <TopRest/>


        </div>


    </>
  );
}

export default Offer;
