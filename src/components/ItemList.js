
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items = [] }) => {
  return (
    <div>
      {items.map((item) => {
        const info = item.card.info;
        const price = (info.price ?? info.defaultPrice) / 100;

        return (
          <div
            key={info.id}
            className="flex justify-between items-start p-4 border-b"
          >
       
            <div className="flex-1 pr-4">
            
              {info.itemAttribute?.vegClassifier && (
                <div className="mb-1">
                  <div
                    className={`w-4 h-4 border-2 rounded-sm ${
                      info.itemAttribute.vegClassifier === "VEG"
                        ? "border-green-600"
                        : "border-red-600"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full m-[2px] ${
                        info.itemAttribute.vegClassifier === "VEG"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    ></div>
                  </div>
                </div>
              )}

<h3 className="text-left font-semibold text-base md:text-lg text-gray-900 truncate mb-1">
  {info.name}
</h3>
<p className="text-left font-semibold text-base md:text-lg text-gray-900 truncate mb-1">
  ₹{price.toFixed(0)}
</p>
              {info.ratings?.aggregatedRating?.rating && (
                <div className="text-sm text-green-600 flex items-center gap-1 mb-1">
                  ⭐ {info.ratings.aggregatedRating.rating} (
                  {info.ratings.aggregatedRating.ratingCountV2 || "0"})
                </div>
              )}

              {info.description && (
                <p className="text-gray-500 text-sm leading-snug line-clamp-2">
                  {info.description}
                </p>
              )}
            </div>
            <div className="relative w-28 h-24 flex-shrink-0">
              {info.imageId && (
                <img
                  src={CDN_URL + info.imageId}
                  className="w-full h-full object-cover rounded-md border"
                  alt={info.name}
                />
              )}

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <button className="bg-white text-green-600 text-sm font-bold border border-gray-300 px-4 py-1 rounded-full shadow-sm hover:shadow-md">
                  ADD
                </button>
                <p className="text-center text-xs text-gray-500 mt-1">
                  Customisable
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
