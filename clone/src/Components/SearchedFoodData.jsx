import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import Navbar1 from "./Navbar1";
import { foodData } from "../assets/assest";
import { useParams } from "react-router-dom";
import { PiGreaterThanLight } from "react-icons/pi";

function SearchedFoodData() {
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // For clicked search item
  const [active,setActive]=useState("Dishes");
  const { category } = useParams();

  // Show food based on route category OR clicked category
  const displayedFood = foodData.filter((item) => {
    if (selectedCategory) {
      return item.category === selectedCategory;
    } else if (category) {
      return item.category === category;
    } 
    return true; // fallback
  });

  // Filter search suggestions (dropdown)
  const searchSuggestions = foodData.filter(
    (item) =>
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.category.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <Navbar1 />

      <div className="w-full min-h-screen bg-white">
        {/* SEARCH SECTION */}
        <div className="relative flex justify-center pt-20">
          <div className="w-[1000px] relative">
            {/* SEARCH BAR */}
            <div
              className="bg-white flex items-center gap-3 px-8 py-4
                         border rounded-md text-gray-400
                         focus-within:shadow-xl transition"
            >
              <FiSearch className="text-lg" />

              <input
                type="text"
                placeholder="Search for dishes or categories"
                className="w-full outline-none text-gray-700"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              {(input || selectedCategory) && (
                <MdOutlineCancel
                  size={26}
                  className="cursor-pointer hover:text-black"
                  onClick={() => {
                    setInput("");
                    setSelectedCategory("");
                  }}
                />
              )}
            </div>

            <div className="flex gap-2 mt-6">
              <div className="w-100px h-30px border border-gray-200 bg-gray-50 rounded-lg text-md text-gray-600 pl-2 pr-2 text-center font-semibold">Sort by</div>
              <div className="w-100px h-30px border border-gray-200 bg-gray-50 rounded-lg text-md text-gray-600 pl-2 pr-2 text-center font-semibold">Fast Delivery</div>
              <div  className="w-100px h-30px border border-gray-200 bg-gray-50 rounded-lg text-md text-gray-600 pl-2 pr-2 text-center font-semibold">Veg</div>
              <div  className="w-100px h-30px border border-gray-200 bg-gray-50 rounded-lg text-md text-gray-600 pl-2 pr-2 text-center font-semibold">rated 4+</div>
              <div  className="w-100px h-30px border border-gray-200 bg-gray-50 rounded-lg text-md text-gray-600 pl-2 pr-2 text-center font-semibold">Rs 100- Rs 200</div>
            </div>


            {/* SEARCH RESULT DROPDOWN */}
            {input && (
              <div
                className="absolute top-full mt-2 w-full
                           bg-white shadow-lg rounded-lg
                           max-h-[350px] overflow-y-auto z-50"
              >
                {searchSuggestions.length > 0 ? (
                  searchSuggestions.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`} // Unique key
                      onClick={() => {
                        setSelectedCategory(item.category); // Show all items in that category
                        setInput(""); // hide dropdown
                      }}
                      className="flex items-center gap-4 px-4 py-3
                                 hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[60px] h-[60px] object-cover rounded-lg"
                      />

                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">₹{item.price}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-400">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* FOOD CARDS */}
        <div className="max-w-6xl mx-auto p-6 mt-10
                        h-[80vh] overflow-y-auto
                        border-t-4 border-gray-200 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedFood.map((item, index) => (
              <div
                key={`${item.id}-${index}`} // Unique key
                className="bg-white rounded-2xl p-6
                           min-h-[300px]
                           shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-sm text-gray-500 font-medium">
                {item.description}
                </h3>

                <div className="text-xs text-gray-500 mt-1 pb-2
                                border-b border-dotted border-gray-300">
                  ⭐ {item.rating} • 25–30 min
                </div>

                <div className="flex justify-between mt-4">
                  {/* LEFT */}
                  <div className="w-[60%] flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        ₹{item.price}
                      </p>
                    </div>

                    <button
                      className="w-[130px] h-[32px] mt-4
                                 border border-gray-200
                                 text-sm text-gray-400 font-semibold
                                 rounded-3xl flex items-center justify-center
                                 hover:bg-gray-100 transition"
                    >
                      More Details
                      <PiGreaterThanLight className="ml-1 mt-[2px]" />
                    </button>
                  </div>

                  {/* RIGHT */}
                  <div className="relative w-[40%] flex justify-end">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[150px] h-[130px]
                                 object-cover rounded-lg"
                    />

                    <button
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2
                                 bg-white text-green-600 font-bold text-sm
                                 px-6 py-1.5 rounded-lg border
                                 hover:bg-green-600 hover:text-white transition"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchedFoodData;
