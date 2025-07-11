import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext} from "react";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext"; 

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

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
          <div className="filter flex">
            <div className="search m-4 p-4 flex items-center">
              <input
                type="text"
                className="border border-solid border-black"
                placeholder="Search restaurants..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="px-4 py-2 m-4 bg-green-200 rounded-lg"
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
            <div className="search m-4 p-4 flex items-center">
            <button 
            className="px-4 py-2 m-4 bg-blue-200 rounded-lg"
              onClick={() => {
                const filteredList = listofRestaurants.filter(
                  (res) => res.info.avgRating > 4.4
                );
                setFilteredRestaurants(filteredList);
              }}
            > Top rated restaurants
            </button>
          </div>
              <div className="search m-4 p-4 flex items-center">
                <label>user name : </label>
                <input className="border border-black p-1.5" onChange={(e) => setUserInfo({ ...loggedInUser, name: e.target.value })}></input>
              </div>
          </div>

          <div className="flex flex-wrap">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
              >
                {restaurant.info.promoted ? (
                  <PromotedRestaurantCard resData={restaurant.info} />
                ) : (
                  <RestaurantCard resData={restaurant.info} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
