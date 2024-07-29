import { useEffect, useState } from "react";
import Cake from "/assets/images/illustration-empty-cart.svg";

interface Items {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };

  name: string;
  category: string;
  price: number;
  countNumber?: number;
}

interface Product {
  products: Items[];
}

export default function Cart({ products }: Product) {

    

    const [cart, setCart] = useState<Items[]>(products)

    useEffect(() => {
        let data
        data = products
        setCart(data)

    },[products])
    console.log(cart)
  return (
    <>
      <div className="">
        {cart.filter(product => {
            return product.countNumber === 0
        }).length === 9 ? 
         <div className="">
         <div className="">
           <h1 className="text-2xl text-[#c52e2e] font-semibold">
             Your Cart (0)
           </h1>
           <div className="flex flex-col justify-center items-center">
             <img src={Cake} alt="" />
             <p className="text-[#c52e2e]">
               Your added items will be appeared here
             </p>
           </div>
         </div>
       </div> : (
        <>
                <h1 className="text-2xl text-[#c52e2e] font-semibold">Your Cart</h1>
        <div className="">
          {cart.map((product) => {
            if (product.countNumber >= 1) {
                
              return (
                <div className="my-4 flex items-center space-x-4 justify-between border-b border-slate-200">
                  <div className="">
                    <p className="text-[15px] font-semibold">{product.name}</p>
                    <span className="text-red-500 font-semibold">
                      {product.countNumber}x{" "}
                      <span className="text-slate-600">@{product.price}</span>
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-slate-400 cursor-pointer hover:text-slate-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              );
            }
          })}
        </div>
        </>
       )}
      </div>

   
    
    </>
  );
}
