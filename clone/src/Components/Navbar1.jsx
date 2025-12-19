import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineHelp } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBox } from "react-icons/fa";

function Navbar1() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };
  const links=[
    {
        icon:<FaBox />,
        name:"Box"
    },
     {
        icon:<IoSearch  />,
        name:"search"
    } ,{
        icon:<CiDiscount1  />,
        name:"discount",
        sup:"new",
    } ,{
        icon:<MdOutlineHelp  />,
        name:"help"
    }, {
        icon:<FaRegUser />,
        name:"user"
    }, {
        icon:<IoCartOutline />,
        name:"cart"
    }
  ]

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
        ></div>
      </div>


      <header className="p[-15px] shadow-xl relative z-20">
        <div className="max-w-[12000px] mx-auto flex items-center justify-between">
<div className="flex items-center gap-4">
  <div className="w-[100px]">
    <img src="images/logo.webp" className="w-full" alt="swiggy logo" />
  </div>

  <span className="font-bold cursor-pointer border-b-[3px] border-black">
    Other{" "}
    <RxCaretDown
      onClick={showSideMenu}
      className="inline font-bold text-[0.9rem] text-[#ff5200]"
    />
  </span>
</div>
          <nav className="flex list-none gap-10  font-semibold text-[20px]   ">
            {links.map(  
                (links,index)  =>
                  <li key={index} className="flex items-center gap-1 hover:text-[#ff5200] cursor-pointer">{links.icon} {links.name} <sup className="text-yellow-400">{links.sup}</sup></li>
                   )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar1;
