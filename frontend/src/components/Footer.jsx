// src/components/Footer.jsx

import { FaFacebookF, FaTelegramPlane, FaTiktok, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="bg-[#081325] text-gray-300 pt-12 pb-6 ">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4 sm:text-center">
        
        {/* About */}
        <div className="sm:flex sm:flex-col sm:items-center">
          <h4 className="text-xl font-semibold text-white mb-4 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:rounded">
            Marota Studio
          </h4>
          <p className="text-sm leading-relaxed">
            Where cinematic artistry and digital innovation converge to create
            extraordinary experiences.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-5 sm:justify-center">
            <a href="https://www.facebook.com/profile.php?id=100087120218376" target="_blank" className="transition transform hover:-translate-y-1">
              <FaFacebookF className="text-white hover:text-white bg-blue-500 p-1 rounded-full" size={22} />
            </a>
            <a href="#" className="transition transform hover:-translate-y-1">
              <FaTelegramPlane className="text-white hover:text-white bg-sky-500 p-1 rounded-full" size={22} />
            </a>
            <a href="https://www.tiktok.com/@marota.acadamy?_t=ZN-8xuxFw8tk2Q&_r=1" target="_blank" className="transition transform hover:-translate-y-1">
              <FaTiktok className="text-white hover:text-xl hover:font-bold" size={22} />
            </a>
            <a href="#" className="transition transform hover:-translate-y-1">
              <FaLinkedinIn className="text-white hover:text-white bg-blue-500 p-1 rounded-full" size={22} />
            </a>
            <a href="#" className="transition transform hover:-translate-y-1">
              <FaTwitter className="text-sky-400 hover:text-sky-300" size={22} />
            </a>
            <a href="#" className="transition transform hover:-translate-y-1">
              <FaInstagram className="text-pink-500 hover:text-pink-700" size={22} />
            </a>
            <a href="#" className="transition transform hover:-translate-y-1">
              <FaYoutube className="text-red-600 hover:text-red-400" size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="sm:flex sm:flex-col sm:items-center">
          <h4 className="text-xl font-semibold text-white mb-4 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:rounded">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#showcase" className="hover:text-blue-400 transition">Portfolio</a></li>
            <li><a href="#courses" className="hover:text-blue-400 transition">Courses</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Academy Programs */}
        <div className="sm:flex sm:flex-col sm:items-center">
          <h4 className="text-xl font-semibold text-white mb-4 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:rounded">
            Academy Programs
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Cinematography Mastery</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Film Direction Workshop</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Full-Stack Development</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Digital Marketing</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="sm:flex sm:flex-col sm:items-center">
          <h4 className="text-xl font-semibold text-white mb-4 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:rounded">
            Newsletter
          </h4>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex sm:flex-col sm:items-center sm:w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded-l-lg bg-white/10 border border-gray-600 text-sm w-full focus:outline-none focus:border-blue-500 sm:rounded-lg sm:mb-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 transition sm:w-full sm:rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
<div className="border-t border-white/10 mt-10 pt-4 text-sm text-gray-300">
  <div className="flex  items-center justify-center m-4 gap-2 sm:flex-row border ">
    <img
      src={logo}
      alt="Marota Logo"
      className="w-6 h-6 rounded-full px-1 py-1 "
    />
    <span className="text-center sm:text-left pt-4 ">
      &copy; {new Date().getFullYear()} Marota Cinematography & Software Academy. All Rights Reserved.
    </span>
  </div>
</div>

    </footer>
  )
}

export default Footer;

