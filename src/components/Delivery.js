import React from 'react'

const Delivery = () => {
  return (
    <div className="flex flex-col py-10 px-16 h-full w-full text-[rgb(51,44,63)] max-sm:w-screen border-2 border-black max-sm:px-4">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">Select Delivery adddres</h1>
        <h1 className="font-semibold text-lg text-[rgb(144,157,175)]">
          You have a saved address in this location
        </h1>
      </div>
      <div className="flex flex-row  justify-between my-10 h-[270px] max-md:flex-col max-md:h-[400px]">
        <div className=" flex flex-col border-2 w-[300px] px-10 py-5 hover:shadow-2xl">
          <h1 className="font-bold text-lg ">Home</h1>
          <h2 className=" text-xs mb-5">Cv Raman Hostel Tiwariganj ,Lucknow</h2>
          <h2 className="font-bold text-sm mb-5">46 MINS</h2>
          <button className="bg-[rgb(96,178,70)] text-white font-bold h-10 w-[130px]">
            DELIVER HERE
          </button>
        </div>
        <div className=" flex flex-col border-2 w-[300px] px-10 py-5 hover:shadow-2xl">
          <h1 className="font-bold text-lg ">Home</h1>
          <h2 className=" text-xs mb-5">Cv Raman Hostel Tiwariganj ,Lucknow</h2>
          <h2 className="font-bold text-sm mb-5">46 MINS</h2>
          <button className="bg-[rgb(96,178,70)] text-white font-bold h-10 w-[130px]">
            DELIVER HERE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delivery