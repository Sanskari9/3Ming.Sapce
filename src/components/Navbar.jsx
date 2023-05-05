import Logo from '../assets/3ming_logo.png'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';


   const Navbar = () => {
     //   usestate is used for close menu or open menu view
   
     const [nav, setNav] = useState(false);
   
     const handleClick = () => {
       return setNav(!nav);
     };
   
   
     return (
       <div className=" w-full h-[88px] flex justify-between items-center p-4 bg-[#141414] text-white   ">
          {/* logo */}
         <div>
          <img src={Logo} alt="LogoImage" style={{width:'260px' }} className="xl:ml-4 mr-20 pr-12 xl:mr-0 xl:pr-0 "/>
         </div>
         
         {/* Menu */}
   
         <ul className="hidden md:flex lg:text-xl  justify-between mx-1  font-medium  cursor-pointer">
           <Link to="/" className=" mx-6   text-2xl hover:text-gray-400">Home</Link>
           <Link to="/about" className=" mx-6   text-2xl hover:text-gray-400">About</Link>
           <Link to="/stream" className=" mx-6   text-2xl hover:text-gray-400 ">Stream</Link>
           <Link to="/promote" className=" mx-6   text-2xl hover:text-gray-400">Promote</Link>
           <Link  className=" mx-6  text-2xl hover:text-gray-400">Blog</Link>
         </ul>
      

           {/* Hamburger */}
         <div onClick={handleClick} className="md:hidden cursor-pointer z-30 md:justify-between ">
           {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
         </div>
        
   
         {/* Mobile Menu */}
   
         <ul
           className={
             !nav
               ? "hidden"
               : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-20"
           }
         >
           <Link to="/" className="py-6 text-4xl">Home</Link>
           <Link to="/about" className="py-6 text-4xl">About</Link>
           <Link to="/stream" className="py-6 text-4xl">Stream</Link>
           <Link to="/promote" className="py-6 text-4xl">Promote</Link>
           <Link className="py-6 text-4xl">Blog</Link>
         </ul>
   </div>
     );
 }  
     
export default Navbar;