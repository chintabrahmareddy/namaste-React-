import { CDN_URL } from "../utils/costants";
const RestaurantCard = (props) => {
    const{resData} = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
    cloudinaryImageId,
  } = resData;

  return (
    <div className="restaurant-card" >
      <img
        className="restaurant-logo"
        src={CDN_URL+cloudinaryImageId }
        alt={name}
        
      />
      <h4>{name}</h4>
      <p>{cuisines.join(" , ")}</p>
      <p>{avgRating} Stars</p>
      <p>{costForTwo}</p>
      {/* <p>{sla?.slaString || `${sla?.deliveryTime} mins`}</p> */}
      <p>{areaName}</p>
    </div>
  );
};
export default RestaurantCard;