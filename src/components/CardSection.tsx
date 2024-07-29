import { useState } from "react";
import { food_items } from "../libs/data";
import Cart from "./Cart";
import ProductCard from "./ProductCard";

export default function CardSection() {
    const [items, setItems] = useState(food_items)
  return (
    <div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-5">
        Desserts
      </h2>

      <div className="flex flex-col space-y-5 md:flex-row space-x-10">
        <div className="md:w-2/3 grid gap-8 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
          {items.map((product,index) => (
            <ProductCard key={index} products={product} setItems={setItems}/>
          ))}
        </div>
        <Cart products={items}/>
      </div>
    </div>
  );
}
