import React, { useState } from "react";
import Cart from "./Cart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger", price: 15000, quantity: 2 },
    { id: 2, name: "Pizza", price: 29900, quantity: 1 },
  ]);

  const handleUpdateQty = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Cart
      cartItems={cartItems}
      onUpdateQty={handleUpdateQty}
      onRemove={handleRemove}
    />
  );
};

export default CartPage;
