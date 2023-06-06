import React from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import NoCart from "./NoCart";
import Delivery from "./Delivery";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartData.reduce((itemSum, item) => {
    const price = item.card?.info?.defaultPrice || 0;
    const adjustedPrice = price ? price / 100 : price + 250;
    return itemSum + adjustedPrice;
  }, 0);

  return (
    <div>
      <div className={`${cartData.length ? "hidden" : "block h-[90vh]"}`}>
        {/* {`banner ${active ? "active" : ""}`} */}
        <NoCart />
      </div>
      <div className="flex bg-[rgb(233,236,238)] px-[110px] justify-between py-[50px] max-md:px-0 max-md:flex-col">
      
        <div className="bg-white w-[750px] h-[400px] max-md:w-[650px] max-md:m-auto ">
          <Delivery />
        </div>
        <div
          className={`${
            cartData.length
              ? "flex flex-col p-10 w-[530px] bg-white  max-md:m-auto max-md:mt-10 max-md:min-h-[400px] max-md:w-[600px]"
              : "bg-inherit p-10 w-[530px] max-md:mt-10 max-md:min-h-[400px] max-md:w-[600px]  "
          } `}
        >
          <div className="flex justify-between">
            <div className="text-2xl font-bold">
              Cart Items : {cartData.length}
            </div>
            <button
              className={`${
                cartData.length
                  ? "hover:shadow-2xl  w-20 h-8 bg-orange-500 text-white  hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-2"
                  : "hidden"
              }`}
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>

          <div
            className={`${
              cartData.length ? "flex flex-wrap min-h-[80vh] mt-10" : "hidden"
            }`}
          >
            {cartData.map((item) => (
              <CartItems key={item?.card?.info?.id} {...item} />
            ))}
          </div>
          <div>
         
            <p
              className={`${
                cartData.length
                  ? "hidden"
                  : "block text-[rgb(144,157,175)] text-sm py-10 max-w-[300px]"
              }`}
            >
              Good food is always cooking! Go ahead, order some yummy items from
              the menu.
            </p>
          </div>
          <hr />
          <div
            className={`${cartData.length ? "flex justify-between" : "hidden"}`}
          >
            <div className="font-semibold text-lg">TO PAY</div>
            <div className="font-semibold text-lg">₹{totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
