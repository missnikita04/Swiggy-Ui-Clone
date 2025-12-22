import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineHelp } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import indiaStates from "../../src/assets/assest";

function Navbar1() {
  const [toggle, setToggle] = useState(false);
    const [query, setQuery] = useState("");
    const [showList, setShowList] = useState(false);
  
  const location=useLocation();
  const currentPath=location.pathname;
  console.log(currentPath);


  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };
  const links=[
    {
        icon:<FaBox />,
        name:"Swiggy Corporate",
        path:"/Corporate"
    },
     {
        icon:<IoSearch  />,
        name:"search",
        path:"search"
    } ,{
        icon:<CiDiscount1  />,
        name:"discount",
        sup:"new",
        path:"/discount"
    } ,{
        icon:<MdOutlineHelp  />,
        name:"help",
        path:"help"
    }, {
        icon:<FaRegUser />,
        name:"user",
        path:"/user"
    }, {
        icon:<IoCartOutline />,
        name:"cart",
        path:"/cart"
    }
  ]
    const filteredLinks=currentPath==="/cart"?links.filter((link)=>link.name==="help" || link.name==="user"):links ; //show all link
const showOtherDropdown=currentPath==="/discount" || currentPath==="/search";
const showHelp=currentPath==="/help";
  const filteredStates = indiaStates.filter((state) =>
    state.toLowerCase().includes(query.toLowerCase())
  );
const getcurrentLocation=()=>{
  if(!navigator.geolocation){
    alert("geolocation not supported");
    return
  }
 navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await res.json();

        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.state;

        setQuery(city);      // ✅ real location name
        setShowList(false);  // close dropdown
      } catch (err) {
        alert("Unable to fetch location name");
      }
    },
    () => {
      alert("Location permission denied");
    }
  );}
  return (
    <>
      <div
        className="black-overlay fixed inset-0 w-full h-full fixed duration-500 z-[999]"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] h-full bg-white fixed top-0 left-0 duration-[400ms] z-[1000]"
          style={{ left: toggle ? "0%" : "-100%" }}
        >
                      {/* SEARCH */}
                      <div className="pt-12 flex flex-col md:flex-row gap-6 justify-center relative pl-10 ">
                        <div className="w-[400px] md:w-[400px] bg-gray-100 flex items-center gap-2 px-4 py-3 rounded-2xl relative z-50 border border-gray-400">
                          <IoLocationOutline className="text-gray-400 text-2xl" />
                          <input
                            type="text"
                            placeholder="Enter your delivery location"
                            value={query}
                            onChange={(e) => {
                              setQuery(e.target.value);
                              setShowList(true);
                            }}
                            onFocus={() => setShowList(true)}
                            className="w-full h-[30px] outline-none text-gray-1000 font-semibold"
                          />
                          {showList && query && (
                            <ul className="absolute top-full left-0 w-full bg-white text-black rounded-xl mt-2 max-h-60 overflow-y-auto shadow-2xl z-[9999]">
                              {/* current location button */}
                              <li className="px-4 py-3 flex intems-center gap-2 text-orange-500  font-semibold cursor-pointer hover:bg-orange-50"
                              onClick={getcurrentLocation}
                              > <IoLocationOutline /> 
                              Use my current location
                              </li>
                              <li className="px-4 py-3 sticky top-0 bg-white z-10">
                                <h1 className="text-sm font-bold text-gray-700">
                                  Select your location
                                </h1>
                                <hr className="mt-2 border-gray-200" />
                              </li>
                              {filteredStates.map((state, index) => (
                                <li
                                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  key={index}
                                  onClick={() => {
                                    setQuery(state);
                                    setShowList(false);
                                  }}
                                >
                                  {state}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
          
        </div>
        </div>
      </div>


      <header className="p-[-15px] shadow-xl relative z-20">
        <div className="max-w-[12000px] mx-auto flex items-center justify-between">
<div className="flex items-center gap-4">
  <div className="w-[100px]">
   <NavLink to="/"> <img src="images/logo.webp" className="w-full" alt="swiggy logo" /></NavLink>
  </div>
  {showHelp && (
    <h1 className="text-xl font-bold text-gray-800">Help</h1>
  )}
{ showOtherDropdown && (
  <span className="font-bold cursor-pointer border-b-[3px] border-black">
    Other{" "}
    <RxCaretDown
      onClick={showSideMenu}
      className="inline font-bold text-[0.9rem] text-[#ff5200]"
    />
  </span>
)}
</div>
          <nav className="flex list-none gap-10  font-semibold text-[20px]   ">
            {filteredLinks.map(  
                (links,index)  =>
                  <NavLink  to={`/${links.name}`} key={index} className="flex items-center gap-1 hover:text-[#ff5200] cursor-pointer">{links.icon} {links.name} <sup className="text-yellow-400">{links.sup}</sup></NavLink>
                   )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar1;
