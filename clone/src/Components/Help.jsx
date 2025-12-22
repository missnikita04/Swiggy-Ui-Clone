import React from "react";
import Navbar1 from "./Navbar1";

function Help() {
  return (
    <>
      <Navbar1 />
      <div className="min-h-screen bg-[#37718e] ">
        {" "}
        {/* help text */}
        <div className="text-white px-12 py-12">
          <h1 className="text-4xl font-bold">Help & Support </h1>
          <p className="text-xl font-semibold">
            Let's take a step ahead and help you better
          </p>
        </div>
        {/* main form */}
        <div className="flex justify-center items-center">
          <div className="bg-white w-full max-w-[1450px] min-h-[600px] flex justify-center items-center ">
            {/* left form */}
            <div className="flex w-full max-w-[1300px] min-h-[400px] flex-col sm:flex-row py-16">
              <div className="w-full md:w-1/2  bg-gray-100 p-4  text-gray-700 text-xl font-semibold space-y-12 list-none py-12 px-24 ">
                <li>Help with orders</li>
                <li>Swiggy One FAQs</li>
                <li>General issues</li>
                <li>Partner Onboarding</li>
                <li>Report Safety Emergency</li>
                <li>Instamart Onboarding</li>
                <li>Legal, Terms & Conditions</li>
                <li>FAQs</li>
                <li>Swiggy Money FAQs</li>
                <li>Swiggy Dineout FAQs</li>
                <li>IRCTC FAQs</li>
                <li>Swiggy HDFC Bank Credit Card - Features</li>
                <li>Swiggy HDFC Bank Credit Card - Usage</li>
                <li>FAQs – Corporate Rewards Programme</li>
                <li>Giftables FAQs</li>
              </div>

              {/* right swiggy order listed here */}
              <div className="w-full md:w-1/2 bg-white p-4 text-white">
                <div>
                  <div className="flex justify-center items-center py-20">
                    <img src="images/empty-orders-image_acrbbw.avif" alt="" />
                  </div>

                  <div className="text-gray-800 font-semibold text-center py-12">
                    <p className="text-2xl">No Orders</p>
                    <p className="lg">You haven'n plced any order yet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default Help;
