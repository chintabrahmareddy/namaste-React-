import { CDN_URL } from "../utils/constants";
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
    <div className=" m-0 p-4 w-[250px] cursor-pointer hover:bg-gray-100" >
      <img
        className="w-50 h-50 rounded-lg"
        src={CDN_URL+cloudinaryImageId }
        alt={name}
        
      />
      <h4 className="font-bold py-3 ">{name}</h4>
      <p>{cuisines.join(" , ")}</p>
      <p>{avgRating} Stars</p>
      <p>{costForTwo}</p>
      <p>{sla?.slaString || `${sla?.deliveryTime} mins`}</p>
      <p>{areaName}</p>
    </div>
  );
};
  export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
}

export default RestaurantCard;