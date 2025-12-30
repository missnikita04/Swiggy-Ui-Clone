import React from "react";
import Navbar1 from "./Navbar1";
import { useParams } from "react-router-dom";
import { foodData } from "../assets/assest";
import { useCart } from "../context/CartContext";
const ScrollCategory = () => {
  const { type } = useParams();

  const filterData = foodData.filter((item) =>
    item.name.toLowerCase().includes(type.toLowerCase())
  );
    const {addToCart}=useCart();
  
  return (
    <>
      <Navbar1 />

      <div className="p-4">
        <h1 className="text-5xl font-bold capitalize mb-4 pl-50">{type}</h1>

        <div
          className="max-w-6xl mx-auto p-6 mt-10
                        h-[80vh] overflow-y-auto
                        border-t-4 border-gray-200 bg-gray-50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterData.map((data, idx) => (
              <div key={idx} className="w-[300px] cursor-pointer">
                {/* IMAGE */}
                <div className="relative h-[190px] rounded-2xl overflow-hidden">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />

                  {/* OFFER */}
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-sm font-bold px-3 py-1 rounded">
                    {data.offer}
                  </div>
                </div>

                {/* DETAILS */}
                <div className="mt-2">
                  <h3 className="font-bold text-lg truncate">{data.name}</h3>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <span className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded">
                      <Star className="inline relative top-0" /> {data.rating}
                    </span>
                    <div className="text-gray-700 font-medium">
                      ₹{data.price}
                    </div>
                  </div>

                  <div className=" flex justify-between">
                    <div className="py-2">
                    {" "}
                    <p className="text-gray-500 text-sm truncate">
                      {data.name}
                    </p>
                    <p className="text-gray-500 text-sm">{data.place}</p>
                    </div>
                    {/* add buttomn */}
                    <div>
<button
  onClick={() => addToCart(data)}
  className="
    bg-white text-green-600 font-bold text-sm
    px-4 py-1 rounded-lg border
    hover:bg-gray-300 hover:text-green-600 transition cursor-pointer"
>
  ADD
</button>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCategory;

const Star = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12.0002" cy={12} r="10.8" fill="#1BA672" />
      <path
        d="M12.0977 15.438C12.0373 15.4024 11.9623 15.4024 11.9019 15.438L8.77957 17.2761C8.32159 17.5457 7.76507 17.1308 7.89275 16.6149L8.73063 13.2294C8.74846 13.1573 8.72339 13.0814 8.66614 13.0341L5.94605 10.7883C5.5298 10.4447 5.74364 9.76902 6.28183 9.72744L9.88118 9.44931C9.95264 9.44379 10.0152 9.39914 10.0435 9.33333L11.4489 6.07662C11.6574 5.59359 12.3423 5.59359 12.5507 6.07662L13.9561 9.33333C13.9845 9.39914 14.047 9.44379 14.1184 9.44931L17.7178 9.72744C18.256 9.76902 18.4698 10.4447 18.0536 10.7883L15.3335 13.0341C15.2762 13.0814 15.2512 13.1573 15.269 13.2294L16.1069 16.6149C16.2345 17.1308 15.678 17.5457 15.22 17.2761L12.0977 15.438Z"
        fill="white"
      />
    </svg>
  );
};
