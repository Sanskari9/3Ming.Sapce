import React from 'react'

const Roadmap = () => {
  return (
    <div className="flex px-2 py-4 my-4">
        <div className="z-10">
      <h1 className="text-2xl lg:text-5xl xl:text-[3.5rem]  uppercase font-bold text-white mb-4 xl:my-16">
        Roadmap
      </h1>

      {/* left section */}
      <div className=" h-[370px] w-[140px] lg:w-[480px] xl:w-[650px] xl:h-[480px] text-white flex flex-col justify-between mt-14 lg:mt-16 xl:pt-[3.5rem] pt-7 lg:pt-8 pr-2">
        <div className='pt-3' >
          <h2 className="text-2xl lg:text-5xl xl:text-6xl font-bold">Connect with Games</h2>
          <p className="text-xl lg:text-4xl font-medium">Feb 2023</p>
        </div>
        <div className='py-2' >
          <h2 className="text-2xl lg:text-5xl xl:text-6xl font-bold">Launch 3Ming.List</h2>
          <p className="text-xl lg:text-4xl font-medium">March 2023</p>
        </div>
      </div>
        </div>

        {/* Road */}
      <div className=" relative h-[560px] w-[8px] xl:h-[740px] xl:w-[12px] xl:top-14 bg-white  flex flex-col items-center justify-around rounded-t-[40px] rounded-b-[40px] mt-3  mx-1 z-10">
        <span className=" w-[12px] h-[12px] xl:w-[16px] xl:h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
        <span className=" w-[12px] h-[12px] xl:w-[16px] xl:h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
        <span className=" w-[12px] h-[12px] xl:w-[16px] xl:h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
        <span className=" w-[12px] h-[12px] xl:w-[16px] xl:h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
        <span className=" w-[12px] h-[12px] xl:w-[16px] xl:h-[16px] bg-[#D9D9D9] rounded-[50%]"></span>
      </div>

        {/* Right Section */}
      <div className=" relative text-white w-[150px] flex flex-col py-2 h-[570px] lg:mt-10 xl:top-12 xl:mt-11 xl:w-[700px] xl:h-[725px] xl:ml-12 justify-between pl-4  z-10 lg:w-[550px]">
        <div className="pt-3">
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold">Comming Soon page</h2>
          <p className="text-xl lg:text-3xl font-medium ">Jan 2023</p>
        </div>
        <div className="">
          <h2 className="text-2xl lg:text-5xl xl:text-6xl font-bold">5 College Game Events</h2>
          <p className="text-xl lg:text-4xl font-medium">March 2023</p>
        </div>
        <div className="">
          <h2 className="text-[1.4rem] lg:text-5xl xl:text-6xl font-bold">Launch 3Ming.Stream</h2>
          <p className="text-xl lg:text-4xl font-medium">May 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
