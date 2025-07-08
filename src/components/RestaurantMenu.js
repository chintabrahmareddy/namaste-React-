// import { useEffect, useState } from "react";
// import Shimmer from "../Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";


// const RestaurantMenu = () => {

//    const { resId } = useParams();
//    const resInfo = useRestaurantMenu(resId);
 
//   if (resInfo === null) return <Shimmer />;

//   const { name, costForTwoMessage, cuisines, city } =
//     resInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info || {};


//   const menuCards =
//     resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//   const itemCards = menuCards
//     .filter((c) => c?.card?.card?.itemCards)
//     .flatMap((c) => c.card.card.itemCards);

//     const categoryCards = menuCards
//     .filter((c) => c?.card?.card?.["@type"]?.includes("ItemCategory"))
//     .map((c) => c.card.card);

//   return (
//     <div className="text-center">
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       <p className="font-bold my-6 text-xl">
//         {cuisines?.join(", ")} - {costForTwoMessage}
//       </p>
//       {categoryCards.map((category) => (
//         <RestaurantCategory key={category.title} data={category} />
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;
import { useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, city } =
    resInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info || {};

  const menuCards =
    resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categoryCards = menuCards
    .filter((c) => c?.card?.card?.["@type"]?.includes("ItemCategory"))
    .map((c) => c.card.card)
    .filter((c) => c?.itemCards?.length); // Ensure it has items

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold my-6 text-xl">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {categoryCards.map((category, index) => (
        <RestaurantCategory
          key={category.title}
          data={category}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index)
          }
          index={index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

