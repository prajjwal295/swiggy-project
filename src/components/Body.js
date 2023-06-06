import { RestourantList } from "../config";
import RestourantCard from "./RestourantCard";
import { useState, useEffect } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import Offline from "./Offline";
import useOnline from "../utils/useOnline";

const filterData = (searchInput, Restaurants) => {
  const result = Restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return result;
};

const Body = () => {
  const [AllRestourants, setAllRestourants] = useState([]);
  const [fillteredRestourants, setFillteredRestourants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // useeffect is very much important hook;
  useEffect(() => {
    getRestourant();
  }, []);
  // Refer notes for better understandings!

  async function getRestourant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8909865&lng=81.0734343&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    setAllRestourants(json?.data?.cards[2]?.data?.data?.cards);
    setFillteredRestourants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const online = useOnline();
  // console.log(online);
  if (!online) {
    return <Offline />;
  }

  if (!AllRestourants)
    return (
      <div className="null-restourants flex flex-col items-center justify-center">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/connection_error_bsppck"
          alt="img" className="w-[400px] h-auto"
        />
        <h1>Oh! All restaurants are currently unserviceable</h1>
        <h3> All restaurants are unserviceable, check back in some time.</h3>
      </div>
   
    );

  return AllRestourants?.length === 0 ? (
    <Shimer />
  ) : (
    <div className="Body-comp  ">
      <div className="search-box flex items-center justify-center my-5 max-sm:w-[300px] m-auto">
        <input
          type="text"
          value={searchInput}
          className="search-placeholder w-80 h-8 bg-slate-300"
          placeholder="search"
          //   Synthetic variable--->learn this
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn w-20 h-8 cursor-pointer border-white rounded mx-1.5 bg-slate-300"
          onClick={() => {
            const data = filterData(searchInput, AllRestourants);
            setFillteredRestourants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className=" body-2 flex flex-col items-start my-2.5">
        <h2 className="text-2xl font-bold ml-[50px] mb-5 ">
          {fillteredRestourants.length} Restourants Available
        </h2>

        <div className="body flex flex-wrap items-center justify-center max-sm:justify-start">
          {fillteredRestourants == 0 ? (
            <h2 className="h-[62vh]">Wrong Choice,Kuch aur dekh bhai!!!</h2>
          ) : (
            fillteredRestourants.map((Restourant) => {
              return (
                <div>
                  <Link to={"/restourant/" + Restourant.data.id}>
                    <RestourantCard
                      {...Restourant.data}
                      key={Restourant.data.id}
                    />
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
