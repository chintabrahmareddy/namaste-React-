// const Grocery = () => {
//   return (
//     <div>
//       <h1>Grocery List</h1>
//         <p>Currently, the grocery list is empty.</p>
//         <p>Explore our grocery items and add them to your list!</p>
//         <p>Thank you for visiting our grocery store!</p>
//         <p>Happy Shopping!</p>
//         <p>For any queries, please contact us at support@grocerystore.com</p>
//     </div>
//   );
// };

// export default Grocery;
import React from "react";

const groceryItems = [
  {
    id: 1,
    name: "Fresh Apples",
    image: "https://source.unsplash.com/200x200/?apples",
    price: 120,
  },
  {
    id: 2,
    name: "Tomatoes",
    image: "https://source.unsplash.com/200x200/?tomato",
    price: 30,
  },
  {
    id: 3,
    name: "Milk 1L",
    image: "https://source.unsplash.com/200x200/?milk",
    price: 55,
  },
  {
    id: 4,
    name: "Onions",
    image: "https://source.unsplash.com/200x200/?onions",
    price: 25,
  },
  {
    id: 5,
    name: "Bread",
    image: "https://source.unsplash.com/200x200/?bread",
    price: 40,
  },
];

const GroceryComponent = () => {
  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
    // You can replace this with actual cart logic
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Grocery Items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {groceryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <h3 className="mt-2 font-semibold">{item.name}</h3>
            <p className="text-green-600 font-bold">₹{item.price}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryComponent;
