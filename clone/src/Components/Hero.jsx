import React from "react";
import { useState, useEffect } from "react";

import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { BiRightArrowCircle } from "react-icons/bi";
import { BiLeftArrowCircle } from "react-icons/bi";
import TopRest from "../Components/TopRest";
import Footer from "../Components/Footer";
import News from "../Components/News";
import Cartfood from "./Cartfood";
import CardGrocery from "./CardGrocery";
import { useNavigate } from "react-router-dom";
import indiaStates from "../../src/assets/assest";
function Hero() {
  const [slide, setSlide] = useState(0);
  const [Category, setCategory] = useState([]);
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const visibleItems = 8;

  const navigate = useNavigate();

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
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/categories");
    const data = await res.json();
    setCategory(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const nextSlide = () => {
    if (slide >= Category.length - visibleItems) return;
    setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide <= 0) return;
    setSlide(slide - 1);
  };

  const foodData = [
    { dish: "Hyderabad" },
    { dish: "Banglore" },
    { dish: "Gurgaon" },
    { dish: "Pune" },
    { dish: "Mumbai" },
    { dish: "Ahmedabad" },
    { dish: "Chandigarh" },
    { dish: "Delhi" },
    { dish: "Chennai" },
    { dish: "Kolkat" },
    { dish: "Jaipur" },
    { dish: "Kota" },
  ];

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
      <section className=" min-h-[900px] bg-[#ff5200]  relative">
        {/* NAVBAR */}
        <div className="h-[130px] flex justify-between items-center px-8">
          <div className="w-[200px] pl-12">
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
          <div className="text-white text-center z-10 px-4 max-w-4xl mt-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Order food. Discover best <br />
              restaurants. Swiggy it!
            </h1>

            {/* SEARCH */}
            <div className="pt-12 flex flex-col md:flex-row gap-6 justify-center relative ">
              <div className="w-full md:w-[320px] bg-white flex items-center gap-2 px-4 py-3 rounded-2xl relative z-50">
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
                  className="w-full h-[50px] outline-none text-gray-700 font-semibold"
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

              <div className="w-full md:w-[320px] bg-white flex items-center gap-2 px-4  rounded-2xl">
                <FiSearch className="text-gray-400 text-2xl" />
                <input
                  type="text"
                  onFocus={() => navigate("/search")}
                  placeholder="Search for restaurants, items or more"
                  className="w-full h-[50px] outline-none text-gray-700 font-semibold"
                />
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div
            className=" py-6 
flex flex-col md:flex-row gap-10 justify-center px-4 relative  "
          >
            {cart.map((item, index) => (
              <div
                key={index}
                className="w-[550px] h-[320px] bg-white rounded-3xl p-8 flex flex-col gap-15 shadow-lg"
              >
                <div>
                  <h1 className="text-gray-800 font-bold text-5xl relative left-6 ">
                    {item.h}
                  </h1>
                  <h2 className="text-gray-500 text-2xl font-semibold relative left-6 ">
                    {item.sh}
                  </h2>
                </div>

                <div className="w-fit  py-1 bg-gray-200 rounded-full relative left-6 ">
                  <p className="text-[#ff5200] font-bold text-xl">{item.P}</p>
                </div>

                <button onClick={()=>navigate("/discount")} className="w-[140px] h-[40px] relative left-5  px-6 py-2 bg-[#ff5200] rounded-full text-white font-semibold text-xl ">
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* // product section */}
      <div className="w-full h-[500px]">
        <div className="flex justify-between  m-4 h-[70px] ">
          <div className="text-2xl font-bold "> Popular Cuisines</div>
          <div className="flex text-3xl text-[#ff5200] ">
            <BiLeftArrowCircle onClick={prevSlide} />
            <BiRightArrowCircle onClick={nextSlide} />
          </div>
        </div>

        <div className="flex z-0  overflow-hidden ">
          {Category.map((cate, index) => {
            return (
              <div
                style={{ transform: `translateX(-${slide * 100}%` }}
                key={index}
                className="w-[150px] shrink-0  duration-700 z-0"
              >
                <img
                  src={"http://localhost:5000/images/" + cate.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>

        {/* grocery with instamart */}
        <div className="flex z-0  overflow-hidden ">
          {Category.map((cate, index) => {
            return (
              <div
                style={{ transform: `translateX(-${slide * 100}%` }}
                key={index}
                className="w-[150px] shrink-0   duration-700 z-0"
              >
                <img
                  src={"http://localhost:5000/images/" + cate.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <hr className="my-4 border border-[3px] text-gray-300" />

      <TopRest />
      <News />

      {/* cart for foood delivery */}
      <div className="h-[500px] relative  flex flex-col items-center justify-center text-center ">
        <h1 className=" w-full font-bold text-3xl text-gray-800">
          Cities with food delivery
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 max-w-5xl">
          {foodData.map((fd, idx) => {
            return <Cartfood {...fd} key={idx} />;
          })}
        </div>
      </div>

      {/* cart for Grocery delivery */}
      <div className="h-[500px] relative  flex flex-col items-center justify-center text-center ">
        <h1 className=" w-full font-bold text-3xl text-gray-900">
          Cities with Grocery delivery
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 max-w-5xl">
          {foodData.map((fd, idx) => {
            return <CardGrocery {...fd} key={idx} />;
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Hero;
