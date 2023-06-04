import React from "react";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/CartSlice";

const CartItems = (item) => {
  // const cartData = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="border-2 shadow-lg w-[200px] h-[270px] p-2.5 flex flex-col m-2.5 hover:border-[2px] hover:shadow-2xl transition-transform">
      <div className="top card-img bg-cover w-auto h-[120px]">
        {item?.card?.info?.imageId && (
          <img
            src={IMG_CDN_URL + item?.card?.info?.imageId}
            className="w-full h-full"
            alt="Item Image"
          />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-[15px]">{item?.card?.info?.name}</h1>
        {!item?.card?.info?.defaultPrice ? (
          <h1>$250</h1>
        ) : (
          <h1 className="text-[15px]">
            ${item?.card?.info?.defaultPrice / 100}
          </h1>
        )}
        <h1 className="text-[10px] font-semibold">
          {item?.card?.info?.itemAttribute?.vegClassifier}
        </h1>
        <button
          className="hover:shadow-2xl  border-2 h-8 bg-orange-500 text-white mt-3 hover:bg-white hover:text-orange-500 hover:border-orange-500"
          onClick={() => handleRemoveItem()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItems;
