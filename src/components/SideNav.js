import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div
      className="bg-[rgb(237,241,247)] relative w-[400px] text-[rgb(102,105,119) m-10
]  max-md:w-auto "
    >
      <ul className="flex flex-col items-center justify-start   h-[100%] max-md:flex-row">
        <li className=" w-[100%] h-[80px] flex justify-center items-center hover:bg-white">
          <Link className="font-semibold" to="/Help/Contact">
            Contacts
          </Link>
        </li>
        <li className=" w-[100%] h-[80px] flex justify-center items-center hover:bg-white">
          <Link className="font-semibold" to="/Help/FAQ">
            FAQ
          </Link>
        </li>
        <li className=" w-[100%] h-[80px] flex justify-center items-center hover:bg-white">
          <Link className="font-semibold" to="/Help/Profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
