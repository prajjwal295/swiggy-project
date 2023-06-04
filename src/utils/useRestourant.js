import React from "react";
import { useEffect, useState } from "react";
import { RES_MENU_API } from "../config";

const useRestourant = (id) => {
  const [Restourant, setRestourant] = useState(null);
  const [menuRestourant, setmenuRestourant] = useState(null);

  useEffect(() => {
    getRestourant();
  }, []);

  async function getRestourant() {
    const data = await fetch(RES_MENU_API + id + "&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setmenuRestourant(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
      //
    );
    setRestourant(json?.data?.cards[0]?.card?.card?.info);
  }

  return [Restourant, menuRestourant];
};

export default useRestourant;
