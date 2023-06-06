import React, { useState } from "react";
import { useEffect } from "react";
import ShimerProfile from "./ShimerProfile";

export const Profile = () => {
  const [userData, setUserData] = useState("");
  getUser = async () => {
    const data = await fetch("https://api.github.com/users/prajjwal295");
    const json = await data?.json();

    setUserData(json);
  };

  useEffect(() => {
    getUser();
  }, []);

  

  return (
    <div className="flex flex-col w-full mt-16 font-bold text-2xl max-md:h-[400px] max-md:mt-0">
      Profile
      <div className="items-center  flex w-[700px] my-10 mx-auto h-[70%] p-10 bg-white profile shadow-2xl rounded max-md:w-full max-md:h-[400px]">
        <div>
          <img
            className="h-[300px] w-[300px] border-2 shadow-2xl"
            src={userData?.avatar_url}
            alt="github-dp"
          />
        </div>
        <div className="border-2 shadow-2xl items-center justify-evenly flex flex-col h-[300px] w-[300px]">
          <h2 className="font-bold text-2xl flex justify-end left-0 ">
            🤖{userData.name}
          </h2>
          <h2 className="font-bold text-xl flex justify-end left-0 text-gray-700">
            🆔 @{userData.login}
          </h2>
          <h2 className="font-bold text-xl flex justify-end left-0 text-gray-700">
            📍{userData.location}
          </h2>

          <a
            className="font-extrabold text-orange-500 "
            href={`${userData?.html_url}`}
          >
            🔗Go To My Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
