// import ItemList from "./ItemList";

// const RestaurantCategory = ({ data }) => {
//   const [showItems, setShowItems] = useState(false);
//   const handleClick = () => {
    
//   };

//   return (
//     <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
//      <div className="flex justify-between cursor-pointer" onClick={handleClick}> <span className="font-bold text-lg">{data?.title} ({data.itemCards?.length})</span>
//       <span>⬇️</span></div>
//       <ItemList items={data.itemCards} />
//     </div>
//   );


// };

// export default RestaurantCategory;
import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    setShowIndex(index);
  };

  if (!data?.itemCards?.length) return null;

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">{showItems ? "▲" : "▼"}</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
