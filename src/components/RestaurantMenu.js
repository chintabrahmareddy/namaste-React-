import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {

   const { resId } = useParams();
   const resInfo = useRestaurantMenu(resId);
 
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, city } =
    resInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info || {};


  const menuCards =
    resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards = menuCards
    .filter((c) => c?.card?.card?.itemCards)
    .flatMap((c) => c.card.card.itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{city}</p>
      <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
      <h2>MENU</h2>
      <ul>
        {itemCards.map((item, index) => (
  <li key={`${item.card.info.id}-${index}`}>
    {item.card.info.name} - {"Rs. "}{item.card.info.price / 100}
  </li>
))}

      </ul>
    </div>
  );
};

export default RestaurantMenu;
