// import React from "react";
// import Header from "../components/Header";
// import Headline from "../components/Headline";
// import logo from '../assets/images/3ming_logo.jpg';
// import Footer from '../components/Footer';
// import "./About.css"
// const About = () => {
//     return(
//         <div>
//             <Headline />
//             <Header />
//             <div className="box-lox container text-light">
//                 <img className="about-logo mt-5"src={logo}/>
//                 <h3 className="card-title1 text-center text-bold mt-5 mb-5">
//                 "Unlock the power of Web3 streaming - Anywhere, Anytime"
//                 </h3>
//                 <h5 className="abt-text text-center text-bold mt-5 pb-6">3MING will be a web3 games streaming platform. Where we allow creators to stream web3 games. 3MING will help Creators to establish there presence in web3 gaming community and build there own virtual gaming communities.          
//                 </h5>
//                 <div class="social-overlap process-scetion mt100  ">
//               <div class="container">
//                   <div class="row justify-content-center">
//                       <div class="col-md-10">
//                           <div class="social-bar">
//                               <div class="social-icons mb-3 iconpad text-center">
                                 
                                  
//                                   <a  class="slider-nav-item"><i class="fab fa-facebook"></i></a>
//                                   <a  class="slider-nav-item"><i class="fab fa-twitter"></i></a>
//                                   <a href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s" target="_blank" class="slider-nav-item"><i class="fab fa-linkedin"></i></a>                             
//                                   <a href="#" class="slider-nav-item"><i class="fab fa-youtube"></i></a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//           </div>
//          </div> 
//                 </div>
//                 <Footer />
//                 </div>
//     )
// };
// //apps
// export default About;
import React from "react";
// import Header from "./components/Header";
import Circle from "../assets/circle.png"
import Roadmap from "../components/Roadmap";
import BackedBy from "../components/BackedBy";
import Headline from "../components/Headline"
import"../index.css"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div>
      <Headline />
      <Navbar />
    
    <div className="w-full mx-auto h-[73%] xl:h-[75%] xl:px-12 px-6 py-1">
      {/* Header Section */}
      <img
        className="absolute w-[320px] h-[920px]  lg:w-[870px] lg:h-[940px] lg:left-[165px] lg:mt-[-6px] xl:w-[1090px] xl:h-[1090px] xl:left-[185px] bg-cover opacity-90"
        src={Circle}
        alt="/"
      />
      {/* About Description */}
      <div className=" flex flex-col">
        <h1 className="text-3xl lg:text-[2.75rem] xl:text-[3.4rem] xl:mt-2 text-white uppercase font-bold py-4 px-1 z-10">
          Unlock the power of <span className="text-indigo-700">WEB3 </span>
           Streaming
        </h1>
        <p className="text-white px-1 py-2  text-[1.3rem] lg:w-[690px] lg:text-3xl xl:text-[2.3rem] xl:w-[840px] xl:leading-10 font-medium z-10">
          3MING will be a web3 games streaming platform. 
          Where we allow creators to stream web3 games. 
          3MING will help Creators to establish there presence in web3 gaming community and build there own virtual gaming communities.
        </p>
      </div>
      {/* Backed By Section */}
      <BackedBy/>
      {/* RoadMap Section */}
      <Roadmap/>

    </div>
    <Footer />
    </div>
  );
};

export default About;
