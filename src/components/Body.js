import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [ListofRestaurants, setRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-button"
        onClick={()=>{
            const filteredList = ListofRestaurants.filter((restaurant) =>
            restaurant.avgRating > 4.2
            );
          setRestaurants(filteredList);
        }}>Top rated restaurants</button>
      </div>
      <div className="restaurant-container" >
        {ListofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;