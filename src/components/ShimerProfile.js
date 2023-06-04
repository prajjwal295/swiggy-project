import React from "react";

const ShimerProfile = () => {
  return (
    <div className="items-center  flex w-[45%] m-auto h-[70%] p-10 bg-white profile shadow-2xl rounded">
      <div>
        <div className="h-[300px] w-[300px] border-2 shadow-2xl bg-gray-300"></div>
      </div>
      <div className="border-2 shadow-2xl items-center justify-evenly flex flex-col h-[300px] w-[300px]">
        <h2 className="font-bold text-3xl flex justify-end left-0">
          {" "}
          -------------
        </h2>
        <h2 className="font-bold text-xl flex justify-end left-0 text-gray-700">
          -------------
        </h2>
        <h2 className="font-bold text-xl flex justify-end left-0 text-gray-700">
          - ------------
        </h2>

        {/* <a
          className="font-extrabold text-orange-500 "
          href={`${userData?.html_url}`}
        >
          🔗Go To My Profile
        </a> */}
      </div>
    </div>
  );
};

export default ShimerProfile;
