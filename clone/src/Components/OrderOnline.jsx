import React from "react";
import Navbar1 from "./Navbar1";
import Card from "./Card";
import { useEffect, useState } from "react";
import News  from "./News";
import CardGrocery from "./CardGrocery";
import Cartfood from "./Cartfood";
import Footer from "./Footer";

function OrderOnline() {
  const [Category, setCategory] = useState([]);

  const fetchTopRestauarnt = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await res.json();
    setCategory(apiData);
  };

  useEffect(() => {
    fetchTopRestauarnt();
  }, []);
  const foodData=[
  { dish:"Paneer near me"},
    { dish:"Rasgulla near me"},
  { dish:"Brownie mear me"},
  { dish:"Mushroom Masala near me"},
  { dish:"Butter Naan near me"},
  { dish:"Dahi Vada near me"},
  { dish:"Mutton Curry near me"},
  { dish:"Veg pizza near me"},
  { dish:"French Fries near me"},
  { dish:"Idli near me"},
  { dish:"Masala aalo near me"},
   { dish:"fried rice near me"}


]
  const foodData1=[
  { id: 1, name: "CakeZone" },
  { id: 2, name: "Gourmet Ice Cream Cakes by Baskin Robbins" },
  { id: 3, name: "The Good Bowl" },
  { id: 4, name: "Kouzina Kafe - The Food Court" },
  { id: 5, name: "Keventers Ice Cream" },
  { id: 6, name: "BK Cafe" },
  { id: 7, name: "Taco Bell" },
  { id: 8, name: "The Dessert Heaven - Pure Veg" },
  { id: 9, name: "Chinese Wok" },
  { id: 10, name: "ITC Fabelle Chocolates" },
  { id: 11, name: "Indiana Burgers" }

]



  return (
    <>
      <Navbar1 />
      {/* image  */}
      <div className="flex justify-center  mt-[40px]">
        <div className="relative">
          <img
            src="images/DO_collectionBanner.avif"
            alt=""
            className=" object-cover max-w-[1200px] w-full h-full rounded-3xl"
          />
          <h1 className="absolute top-1/2 left-10 -translate-y-1/4 text-white text-2xl  font-semibold">
            Great Food Offers Near You - <br />
            Order Online Now
          </h1>
        </div>
      </div>

      {/* foods */}
      <div className="w-full h-full px-4 md:px-10 lg:px-20">
        <div className="overflow-hidden pt-20">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-2 transition-transform duration-500 ease-in-out">
            {Category.map((data, idx) => (
              <Card {...data} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="max-w-[1200px] w-full h-[270px] border border-gray-300 rounded-lg p-10 " >
          <h1 className="text-gray-700 text-2xl md:text-4xl sm:text-md font-bold">Get the Best Offers on Food from Top Restaurants Near You</h1>
          <h3 className="text-gray-600 md:text-lg text-md sm:text-sm font-semibold">
Get ready for a scrumptious adventure filled with unbeatable offers on your favourite foods and restaurants. Whether you're in the mood for a cheesy pizza, a sizzling burger, or a delightful bowl of pasta, now is the perfect time to satisfy your cravings while saving big.         </h3>
 <br />
          <h3 className="text-gray-600 md:text-lg  font-semibold  text-md sm:text-sm">All the top-rated restaurants and popular eateries are rolling out enticing deals and discounts that are too good to resist. From mouthwatering buy-</h3>
         
        </div>
      </div>
    
    {/* news */}
    <div className="relative pt-12">
    <News/>

    </div>

    {/* cart for foood delivery */}
<div className="h-[500px] relative  flex flex-col items-center justify-center text-center ">
<h1 className=" w-full font-bold text-3xl text-gray-800">Order Popular Dishes Online Near Me</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-8 max-w-5xl">
  {foodData.map((fd,idx)=>{
    return(
          <Cartfood  {...fd}  key={idx}/>
    )
  })}
</div>
</div>

{/* cart for Grocery delivery */}
<div className="h-[500px] relative  flex flex-col items-center justify-center text-center ">
<h1 className=" w-full font-bold text-3xl text-gray-900">Restaurant Chains Near Me</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 pt-8 md:grid-cols-4 gap-3  max-w-5xl">
  {foodData1.map((fd,idx)=>{
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

export default OrderOnline;
