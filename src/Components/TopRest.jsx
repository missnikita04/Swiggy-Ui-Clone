import React, { useEffect } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { BiLeftArrowCircle } from "react-icons/bi";
import { useState } from "react";
import Card from "../Components/Card";

function TopRest() {
  const [slide, setSlide] = useState(0);
  const [Category, setCategory] = useState([]);
  const visibleItems = 4;

  const fetchTopRestauarnt = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await res.json();
    setCategory(apiData);
  };

  useEffect(() => {
    fetchTopRestauarnt();
  }, []);

  const nextSlide = () => {
    if (slide >= Category.length - visibleItems) return;
    setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide <= 0) return;
    setSlide(slide - 1);
  };

  return (
    <>
      <div className="h-[180px] flex justify-between  m-4 h-[70px] relative top-30  mb-[100px] ">
        <div className="text-2xl font-bold ">
          {" "}
          Discover best restuarant on dineout
        </div>
        <div className="flex text-3xl text-black ">
          <BiLeftArrowCircle onClick={prevSlide} />
          <BiRightArrowCircle onClick={nextSlide} />
        </div>
      </div>
      <div className="flex gap-3  overflow-hidden h-[460px]">
        <div
          className="flex gap-3 duration-500"
          style={{
            transform: `translateX(-${slide * 260}px)`,
          }}
        ></div>
        
        <div className="overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${slide * 260}px)`,
            }}
          >
            {Category.map((data, idx) => (
              <Card {...data} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopRest;
