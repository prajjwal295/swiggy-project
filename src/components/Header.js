import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const [userLogin, setUserLogin] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="flex bg-white shadow-2xl align-items justify-between m-0 h-20 w-screen mb-0  max-sm:justify-center max-sm:h-[13rem] max-sm:flex-col max-sm:items-center ">
      <div className="left">
        <a href="/">
          <img
            className="logo h-full w-auto px-10 py-5 relative max-sm:h-20 max-sm:p-0 max-sm:mt-2"
            src="https://ps.w.org/restrofood-lite/assets/icon-256x256.gif?rev=2740717"
            alt="restro-food"
          />
        </a>
      </div>
      <div className="relative right flex items-center max-sm:justify-center max-sm:h-40 max-sm:flex-col  ">
        <ul className="nav-list flex max-sm:m-auto items-center justify-center border-2 border-black max-sm:m">
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
            className="h-8 w-20 justify-center items-center mr-5 text-white bg-orange-500"
            onClick={() => {
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
