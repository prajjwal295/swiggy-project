import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import { IMG_CDN_URL } from "../config";
import useRestourant from "../utils/useRestourant";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const RestourantMenu = () => {
  const { id } = useParams();
  // console.log("id:", id);

  const dispatch = useDispatch();

  const handleAddItem = (Menu) => {
    dispatch(addItem(Menu));
  };

  const restourantArray = useRestourant(id);
  // console.log("Restourant:", Restourant);

  const restaurantInfo = restourantArray[0];
  const restourantMenu = restourantArray[1];

  console.log({ restourantMenu });

  if (!restaurantInfo) {
    // console.log("Restourant is falsy");
    return <Shimer />;
  }

  return (
    <div className="flex flex-row  max-md:flex-col">
      <div className="flex flex-col max-w-[500px] w-[100%] border-2 py-10 bg-[rgb(237,241,247)]  items-start max-md:max-w-full">
        <h1 className="font-bold mx-5 max-sm:text-center">Restaurant :{id}</h1>
        <h1 className="font-bold text-4xl mx-7">{restaurantInfo?.name}</h1>
        <div className="flex flex-col m-5 max-md:flex-row">
          <div className="border-2 h-[400px] w-[400px]">
            <img
              className="h-full w-full"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                restaurantInfo.cloudinaryImageId
              }
            />
          </div>
          <div className="text-lg m-7 font-medium">
            <h3>{"AreaName: " + restaurantInfo?.areaName}</h3>
            <h3>{"City: " + restaurantInfo?.city}</h3>
            <h3>{restaurantInfo?.avgRating + " stars"}</h3>
            <h3>{"CostForTwo: " + restaurantInfo?.costForTwo}</h3>
            <h3>{"Veg: " + restaurantInfo?.veg}</h3>
            <h3>{restaurantInfo?.costForTwoMessage}</h3>
          </div>
        </div>
        <div></div>
        <hr />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl mx-10 mt-5">Menu List</h1>
        {!restourantMenu ? (
          <div>
            <h1 className="mx-10 my-5 font-bold text-lg">No Item Available</h1>
            <img
              src="https://www.authenticlifeelc.com/fbm-data/images/menu-unavailable.jpg"
              alt="no-food"
              className="h-[80%]"
            />
          </div>
        ) : (
          <div className=" flex flex-wrap justify-center mx-10 my-5 items-start max-md:mx-2">
            {restourantMenu.map((Menu) => (
              <div
                key={Menu?.card?.info?.id}
                className="border-2  shadow-lg  w-[200px] h-[270px]  p-2.5 flex flex-col m-2.5 hover:border-[2px] hover:shadow-2xl transition-transform"
              >
                <div className="top card-img  bg-cover w-auto h-[120px]">
                  {
                    <img
                      src={IMG_CDN_URL + Menu?.card?.info?.imageId}
                      onError={(event) => {
                        event.target.src =
                          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                          restaurantInfo.cloudinaryImageId;
                      }}
                      className="w-full h-full"
                    />
                  }
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-[15px]">
                    {Menu?.card?.info?.name}
                  </h1>
                  {!Menu?.card?.info?.defaultPrice ? (
                    <h1>$250</h1>
                  ) : (
                    <h1 className="text-[15px]">
                      ${Menu?.card?.info?.defaultPrice / 100}
                    </h1>
                  )}
                  <h1 className="text-[10px] font-semibold">
                    {Menu?.card?.info?.itemAttribute?.vegClassifier}
                  </h1>
                  <button
                    className="hover:shadow-2xl border-2 h-8 bg-green-600 text-white mt-3 hover:bg-white hover:text-green-600 hover:border-green-600"
                    onClick={() => handleAddItem(Menu)}
                  >
                    Add to Cart
                  </button>
                  {/* {console.log("Menu.card.info:", Menu?.card?.info)} */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestourantMenu;
