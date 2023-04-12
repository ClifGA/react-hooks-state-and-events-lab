import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  
  const [cart, setCart] = useState(true)
  
  const handleCart = () => setCart(cart => !cart)
  let buttonText = cart ? "Add to Cart" : "Remove From Cart"
  let cartClassChange = cart ? 'add' : 'in-cart' 
  
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartClassChange} onClick={handleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
