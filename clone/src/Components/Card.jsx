import React from "react";
import { GiTabletopPlayers } from "react-icons/gi";

function Card(props) {
  return (
    <div className="w-[273px] h-[400px] shrink-0 grow border rounded-b-lg rounded-lg border-gray-300 ">
      <div className="h-[182px] rounded-t-lg overflow-hidden relative ">
        <img
          src={"http://localhost:5000/images/" + props.image}
          alt="img"
          className="object-cover w-full h-full"
        />
        <div className="img-overlay absolute w-full h-full top-0 flex items-end p-2 text-[20px] font-bold text-white tracking-tighter justify-between">
          {props.title}{" "}
          <p className="flex relative right-2 gap-1 ">
            <Star className="inline relative top-1" /> {props.rating}
          </p>
        </div>
      </div>
      <div className="mt-3 text-xl font-bold left-3 relative">{props.name}</div>
      <div>
        <span className="text-gray-600 relative left-3 text-sm ">
          {props.minTime} -{props.maxTime} mins
        </span>
      </div>
      <div className="text-gray-600 relative left-3 text-sm">{props.place}</div>
      <div className="w-[130px]  py-1 bg-gray-200 rounded-full relative  relative left-3">
        <p className="text-gray-600 font-semibold text-sm gap-2 flex ">
          <GiTabletopPlayers className="inline text-xl " />
           Table booking
        </p>
      </div>
      <div className="w-[250px] relative left-3">
        {/* Top green offer */}
        <div className=" h-[40px] mt-2 flex items-center justify-between rounded-lg bg-green-600 px-3 py-3 text-white relative overflow-hidden  ">
          {/* dotted pattern (optional) */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:10px_10px]" />

          <div className="relative flex items-center gap-2 text-sm font-medium ">
            <span className="bg-white text-green-600 rounded-full p-1 text-xs w-[25px] ">
              <img
                src="	https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
                alt=""
              />
            </span>
            <span>{props.offer}</span>
          </div>

          <span className="relative text-sm font-semibold">+ 2 more</span>
        </div>

        {/* Bottom light green offer */}
        <div className=" h-[40px] rounded-lg bg-green-100 px-3 py-2 mt-2 text-sm font-medium text-green-800 relative  text-center ">
          Up to 10% off with bank offers
        </div>
      </div>
      </div>
    
  );
}

export default Card;

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
