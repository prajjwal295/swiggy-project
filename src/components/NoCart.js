import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

 const NoCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[87vh]">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="no restourant"
        className="h-[250px] w-auto mb-4"
      />
      <h1 className="font-bold text-xl text-[rgb(51,44,63)] mb-2">
        Your cart is empty
      </h1>
      <h2 className="font-medium text-sm text-[rgb(95,83,114)] mb-4">
        You can go to home page to view more restourants
      </h2>
      <button className="border-2 bg-[hsl(27,97%,54%)] px-3 py-2 text-white font-semibold">
        <Link to="/Home">
          SEE RESTAURANTS NEAR YOU
        </Link>
      </button>
    </div>
  );
};

export  default NoCart