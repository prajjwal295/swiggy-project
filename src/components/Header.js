import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const [userLogin, setUserLogin] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="flex bg-white shadow-2xl align-items justify-between m-0 h-20 w-full mb-0  max-md:justify-center max-md:h-40 max-md:flex-col max-md:items-center z-50 ">
      <div className="left">
        <a href="/">
          <img
            className="logo h-full w-auto px-10 py-5 relative max-md:h-20 max-md:p-0 mb-2"
            src="https://ps.w.org/restrofood-lite/assets/icon-256x256.gif?rev=2740717"
            alt="restro-food"
          />
        </a>
      </div>
      <div className="right flex items-center ">
        <ul className="nav-list flex">
          <li className="pr-10">
            <Link className="font-semibold hover:text-orange-500" to="/">
              Home
            </Link>
          </li>
          <li className="pr-10">
            <Link className="font-semibold hover:text-orange-500" to="/Help">
              Help
            </Link>
          </li>
          <li className="pr-10">
            <Link className="font-semibold hover:text-orange-500" to="/Cart">
              Cart - {cartItems.length}
            </Link>
          </li>
          {/* <li className="pr-10">
            <Link className="font-semibold" to="/Contact">
              Contact
            </Link>
          </li> */}
          <li className="pr-10">
            <Link
              className="font-semibold hover:text-orange-500"
              to="/Instamart"
            >
              Instamart
            </Link>
          </li>
        </ul>

        {userLogin ? (
          <button
            className="h-8 w-20 justify-center items-center mr-5 text-white bg-orange-500"            onClick={() => {
              setUserLogin(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="h-8
            w-20  justify-center align-middle  items-center mr-5 bg-green-500 text-white"
            onClick={() => {
              setUserLogin(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

// export default Header;
