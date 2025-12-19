import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#f2f3f5] pt-16">
      <div className="max-w-7xl mx-auto px-6 ">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

          {/* LOGO */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="images/Group.svg"
                alt="Swiggy"
                className="w-40"
              />
              <span className="text-2xl font-bold text-orange-500">Swiggy</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2025 Swiggy Limited
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold  mb-4 text-2xl text-gray-900">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Minis</li>
              <li>Pyng</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-2xl text-gray-900">Contact us</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>

            <h3 className="font-semibold mb-4 text-2xl text-gray-900">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* AVAILABLE IN */}
          <div>
            <h3 className="font-semibold  mb-4 text-2xl text-gray-900">Available in:</h3>
            <ul className="space-y-2 text-gray-600 text-sm mb-4">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>

            <select className="border rounded-lg px-3 py-2 text-sm text-gray-700">
              <option>685 cities</option>
            </select>
          </div>

          {/* LIFE AT SWIGGY */}
          <div>
            <h3 className="font-semibold mb-4 text-2xl text-gray-900">Life at Swiggy</h3>
            <ul className="space-y-2 text-gray-600 text-sm mb-6">
              <li>Explore With Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>

            <h3 className="font-semibold mb-4 text-2xl text-gray-900">Social Links</h3>
            <div className="flex gap-4 text-gray-700 text-lg">
              <FaLinkedinIn />
              <FaInstagram />
              <FaFacebookF />
              <FaPinterestP />
              <FaTwitter />
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <hr className="my-10 border-gray-300" />
      </div>
    </footer>
  );
}

export default Footer;
