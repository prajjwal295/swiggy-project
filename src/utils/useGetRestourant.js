// import React from "react";
import { useEffect, useState } from "react";

const useGetRestourant = () => {
  const [AllRestourants, setAllRestourants] = useState([]);
  const [fillteredRestourants, setFillteredRestourants] = useState([]);

  useEffect(() => {
    getRestourant();
  }, []);
  // Refer notes for better understandings!

  async function getRestourant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8909865&lng=81.0734343&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setAllRestourants(json?.data?.cards[2]?.data?.data?.cards);
    setFillteredRestourants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return [AllRestourants, fillteredRestourants];
};

export default useGetRestourant;
