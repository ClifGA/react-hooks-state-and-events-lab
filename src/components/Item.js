import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  
  const [cart, setCart] = useState(true)
  
  const handleCart = () => setCart(cart => !cart)
  let word = cart ? "Add to Cart" : "Remove From Cart"
  let test = cart ? 'add' : 'in-cart' 
  
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={test} onClick={handleCart}>{word}</button>
    </li>
  );
}

export default Item;
