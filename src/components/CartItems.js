import React from "react";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/CartSlice";

const CartItems = (item) => {
  // const cartData = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
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
          <div className="hover:shadow-2xl  border-2 h-8 bg-gray-300 text-black  mt-3 hover:bg-white hover:text-orange-500 hover:border-orange-500 flex justify-between">
            <button className="text-lg border-2 relative min-w-[50%]" onClick={() => handleAddItem(item)}>
              +
            </button>
            <button className="text-lg border-2 min-w-[50%]" onClick={() => handleRemoveItem()}>
              -
            </button>
          </div>
       
      </div>
    </div>
  );
};

export default CartItems;
