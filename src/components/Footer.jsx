import React from "react";
import Logo1 from "../assets/3ming_logo.png";
import social1 from "../assets/Ellipse 43.png";
import social2 from "../assets/Ellipse 38.png";
import social3 from "../assets/Ellipse 39.png";
import social4 from "../assets/Ellipse 41.png";
import social5 from "../assets/Ellipse 42.png";

function Footer() {
  return (
    <footer className="bg-[#141414] pt-4 rounded text-center dark:text-neutral-200 lg:text-right sm:text-right">
      <div className="mx-6  lg:font-medium  text-center md:text-left justify-center align-middle">
        <div className="grid-1 grid gap-1   sm:grid-row-2   lg:grid-cols-4 md:grid-cols-2">
         

<div className="flex p-2 pt-2 justify-center">
        <img src={Logo1} alt="" className="h-[84px] pb-1" />

        
      </div>
          <div className="hidden md:flex flex-col mx-24 pt-4">
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Community
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                faq
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Help
              </a>
            </p>
          </div>

          <div className="hidden md:flex flex-col mx-4">
            <p className="mb-1 pt-4">
              <a href="#!" className="text-white dark:text-neutral-200">
                About us
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Terms of use
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="sm:flex flex-row md:hidden">
            <div className="flex flex-row space-x-4 justify-center" >
            <p className="mb-1">
              <a href="#" className="text-white dark:text-neutral-200">
                Community
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                faq
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Help
              </a>
            </p>
            </div>
            <div className="flex flex-row space-x-4 justify-center" >
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                About us
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Terms
              </a>
            </p>
            <p className="mb-1">
              <a href="#!" className="text-white dark:text-neutral-200">
                Privacy
              </a>
            </p>
            </div>
            <div>

            </div>
          </div>


          <div className="grid pt-4 ">
            <h6 className="lg:text-xl md:text-center md:ml-10 md:pl-[50px] xl:text-center flex justify-center font-semibold uppercase md:justify-start text-white">
              social
            </h6>
            <div className="mb-16  flex items-center justify-center  lg:pb-4 md:ml-10 md:pt-3 md:justify-start">
              <p>
                <img src={social1} alt="" className="w-7 mr-2" />
              </p>

              <p>
                <img src={social2} alt="" className="w-7 mr-2" />
              </p>

              <p>
                <img src={social3} alt="" className="w-7 mr-2" />
              </p>
              <p>
                <img src={social4} alt="" className="w-7 mr-2" />
              </p>

              <p>
                <img src={social5} alt="" className="w-7 mr-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;