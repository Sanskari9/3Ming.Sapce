import React from 'react'
import Microsoft from "../assets/microsoft.png";
import PedalStart from "../assets/pedalstart.png";
import social1 from "../assets/Ellipse 43.png";
import social2 from "../assets/Ellipse 38.png";
import social3 from "../assets/Ellipse 39.png";
import social5 from "../assets/Ellipse 41.png";
import social4 from "../assets/Ellipse 42.png";

const BackedBy = () => {
  return (
    <div className=" flex flex-col">

          {/* Heading */}
        <h1 className="text-3xl lg:text-4xl xl:text-[3.2rem] text-white uppercase font-bold px-1 pt-4  z-10">
          Backed By
        </h1>

          {/* Images */}
        <div className="z-10 flex items-center ml-[-14px] xl:ml-[-26px]">
          <img src={Microsoft} alt="/" className=" w-[180px] lg:w-[260px] xl:w-[290px]" />
          <img src={PedalStart} alt="/" className="w-[140px] lg:w-[220px] xl:w-[260px]"/>
        </div>


        {/* social Icons */}
        <div className="flex text-white z-10 w-[200px] h-[40px] py-2 my-2  lg:w-[350px] xl:w-[500px]">
          <a href="" className="mx-2 "><img src={social1} alt="" className="xl:w-[60px] xl:mx-2" /></a>
          <a href="" className="mx-1 "><img src={social2} alt="" className="xl:w-[60px] xl:mx-2"/></a>
          <a href="" className="mx-1 "><img src={social3} alt="" className="xl:w-[60px] xl:mx-2"/></a>
          <a href="" className="mx-1 "><img src={social4} alt="" className="xl:w-[60px] xl:mx-2"/></a>
          <a href="" className="mx-1 "><img src={social5} alt="" className="xl:w-[60px] xl:mx-2"/></a>
        </div>
      </div>
  )
}

export default BackedBy
