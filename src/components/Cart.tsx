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
  countNumber: number;
}

interface Product {
  products: Items[];
  changeCart: React.Dispatch<
    React.SetStateAction<
      {
        image: {
          thumbnail: string;
          mobile: string;
          tablet: string;
          desktop: string;
        };
        name: string;
        category: string;
        price: number;
        countNumber: number;
      }[]
    >
  >;
  setState: React.Dispatch<React.SetStateAction<boolean>>
  menu? : boolean
}

export default function Cart({ products, changeCart, setState , menu}: Product) {
  const [cart, setCart] = useState<Items[]>(products);

  let sumOfTotal = 0
  cart.map(product => {
    sumOfTotal += product.countNumber * product.price
    // return sumOfTotal
  })
  console.log(sumOfTotal)

  // console.log(total)

  const data_length = cart.filter(product => {
    return product.countNumber >= 1
   }).length

  const handleDelete = (e: string) => {
    setCart((prev) =>
      prev.filter((product) => {
        return product.name !== e;
      })
    );

    changeCart((prev) =>
      prev.map((product) => {
        if (product.name === e) {
          return { ...product, countNumber: 0 };
        }
        return product;
      })
    );
  };


  useEffect(() => {
    const data = products;
    setCart(data);
  }, [products]);
  // console.log(cart);
  return (
    <>
      <div className={`${menu ? "block" : "hidden"} md:block`}>
        {cart.filter((product) => {
          return product.countNumber === 0;
        }).length === 9 ? (
          <div className="mb-6">
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
          </div>
        ) : (
          <>
            <h1 className={`text-2xl text-[#c52e2e] font-semibold`}>Your Cart ({data_length})</h1>
            <div className="">
              {cart.map((product) => {
                if (product.countNumber >= 1) {
                  return (
                    <div className="my-4 flex items-center space-x-8 justify-between border-b border-slate-200">
                      <div className="">
                        <p className="text-[15px] font-semibold">
                          {product.name}
                        </p>
                        <span className="text-red-500 font-semibold">
                          {product.countNumber}x{" "}
                          <span className="text-slate-600">
                            @{product.price}
                          </span>
                        </span>
                      </div>

                      <svg
                        onClick={() => handleDelete(product.name)}
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

            <div className="flex justify-between">
              <p>Order Total</p>
              <p className="font-semibold text-xl">${sumOfTotal}</p>
            </div>

            <div className="flex flex-col mt-6 mb-5">
              <button className="bg-red-700/90 text-white rounded-full py-2 hover:bg-red-600" onClick={() => setState(true)}>Confirm Order</button>
            </div>
          </>
        )}
      </div>


    </>
  );
}

