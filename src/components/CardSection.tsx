import { useEffect, useState } from "react";
import { food_items } from "../libs/data";
import Cart from "./Cart";
import ProductCard from "./ProductCard";
import ConfirmCard from "./ConfirmCard";

export default function CardSection() {
  const [items, setItems] = useState(food_items);

  const [state, setState] = useState(false);
  const [menu, showMenu] = useState(false);
  // const [notify, setNotify] = useState(false)





  let sumOfTotal = 0;
  items.map((product) => {
    sumOfTotal += product.countNumber * product.price;
    // return sumOfTotal
  });


  useEffect(() => {
    if (state === false) {
      setItems(food_items);
    }
  }, [state]);

  console.log(items)
  // console.log(notify)

  return (
    <div className={`${state ? "bg-slate-400/20" : ""}`}>
      <div className="flex justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-5">
          Desserts
        </h2>
        <div className="relative md:hidden">
          <svg
            onClick={() => showMenu((prev) => !prev)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 absolute -top-2 left-4 animate-bounce text-red-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </div>
      </div>
      {menu && (
        <Cart
          products={items}
          changeCart={setItems}
          setState={setState}
          menu={menu}
        />
      )}

      <div className="relative">
        <div
          className={`flex flex-col space-y-5 md:flex-row md:space-x-10 ${
            state ? "!pointer-events-none disabled:pointer-events-none" : ""
          }`}
        >
          <div className="md:w-2/3 grid gap-8 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
            {items.map((product, index) => (
              <ProductCard key={index} products={product} setItems={setItems} />
            ))}
          </div>
          <Cart products={items} changeCart={setItems} setState={setState} />
        </div>

        {state && (
          <ConfirmCard items={items} total={sumOfTotal} setState={setState} />
        )}
      </div>
    </div>
  );
}
