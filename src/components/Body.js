import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9806128&lng=77.7462862&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      
    );
    const json = await data.json();
    console.log(json);

    const cards = json?.data?.cards;
    const restaurantDataCard = cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantDataCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListofRestaurants(restaurants);
    setFilteredRestaurants(restaurants); 
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus=== false) {
    return <h1>Looks like you are offline. Please check your internet connection.</h1>;
  }

  return (
    <>
      {listofRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-box"
                placeholder="Search restaurants..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                onClick={() => {
                  const filteredList = listofRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(filteredList);
                }}
              >
                Search
              </button>
            </div>

            <button
              className="filter-button"
              onClick={() => {
                const filteredList = listofRestaurants.filter(
                  (res) => res.info.avgRating > 4.2
                );
                setFilteredRestaurants(filteredList);
              }}
            > Top rated restaurants
            </button>
          </div>

          <div className="restaurant-container">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
              >
                <RestaurantCard resData={restaurant.info} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
