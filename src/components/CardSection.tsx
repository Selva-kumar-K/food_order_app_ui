import {useEffect, useState } from "react";
import { food_items } from "../libs/data";
import Cart from "./Cart";
import ProductCard from "./ProductCard";
import ConfirmCard from "./ConfirmCard";

export default function CardSection() {
    const [items, setItems] = useState(food_items)

    const [state, setState] = useState(false)
    console.log(items)

    let sumOfTotal = 0
    items.map(product => {
      sumOfTotal += product.countNumber * product.price
      // return sumOfTotal
    })
    console.log(sumOfTotal)

    useEffect(() => {
      if(state === false){
        setItems(food_items)
      }
    },[state])
    

  return (
    <div className={`${state ? "bg-slate-300/50" : ""}`}>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-5">
        Desserts
      </h2>

      <div className="relative flex flex-col space-y-5 md:flex-row space-x-10">
        <div className="md:w-2/3 grid gap-8 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
          {items.map((product,index) => (
            <ProductCard key={index} products={product} setItems={setItems}/>
          ))}
        </div>
        <Cart products={items} changeCart={setItems} setState={setState}/>

        {state && <ConfirmCard items={items} total={sumOfTotal} setState={setState}/> }

      </div>
    </div>
  );
}
