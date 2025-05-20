import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  } , []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9806128&lng=77.7462862&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    const cards = json?.data?.cards;
    const restaurantDataCard = cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants = restaurantDataCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListofRestaurants(restaurants);
  };

  return listofRestaurants.length === 0? (<Shimmer />) :(
    <div className="body">
      <div className="filter">
        <button className="filter-button"
        onClick={()=>{
            const filteredList = listofRestaurants.filter((res) =>
              res.info.avgRating > 4.2
            );
            setListofRestaurants(filteredList);
        }}>Top rated restaurants</button>
      </div>
      <div className="restaurant-container" >
        {listofRestaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;