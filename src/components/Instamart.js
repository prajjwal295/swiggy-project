
import React from "react";

const Instamart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[87vh]">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="no restourant"
        className="h-[250px] w-auto mb-4"
      />
      <h1 className="font-bold text-xl text-[rgb(51,44,63)] mb-2">
        This Feature is only Available in Mobile App
      </h1>
      <h2 className="font-medium text-sm text-[rgb(95,83,114)] mb-4">
        You can go to Play Store to download our App
      </h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZFRpgfXbmDsvQWgQGnLMnpz6bJLCr7dB6A"
        className="w-[150px] mt-2"
      >
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en&gl=US" />
      </img>
    </div>
  );
};

export default Instamart;
