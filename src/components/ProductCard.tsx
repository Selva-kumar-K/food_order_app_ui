import { useState } from "react";
import Cart from "/assets/images/icon-add-to-cart.svg";

interface Product {
  products: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };

    name: string;
    category: string;
    price: number;
    countNumber ? : number
  },

  setItems  : React.Dispatch<React.SetStateAction<{
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
}[]>>
}

export default function ProductCard({ products, setItems }: Product) {
  const [state, setState] = useState(false);
  // const mobile : (string | undefined | boolean)= window.screen.width < 520 && products.image.mobile || window.screen.width > 520 && products.image.desktop
  const handleClick = (e : string) => {
    setItems(prev => prev.map(product => {
        if(product.name === e){
            return {...product, countNumber : 1}
        }
        return product
    }))

    setState(true)
  }


  const handleAdd = (e : string) => {
    setItems(prev => prev.map(product => {
        if(product.name === e){
            return {...product, countNumber : product.countNumber + 1}
        }
        return product
    }))
  }

  const handleMinus = (e : string) => {
    setItems(prev => prev.map(product => {
        if (product.name === e){
            if(product.countNumber <= 1){
                setState(false)
            }
            return {...product, countNumber : product.countNumber - 1}
        }

        return product
    }))
  }

//   console.log(products)
  return (
    <div className="max-w-md bg-slate-200/20">
      <div className="relative">
        <img
          src={products.image.desktop}
          alt=""
          className={`rounded-xl w-[556px] md:w-[656px]`}
        />
        {!state || products.countNumber === 0?
          <button onClick={() => handleClick(products.name)} className="border border-slate-500/50 rounded-full bg-white text-black flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2 absolute -bottom-5 left-0 right-0 mx-auto w-[140px] md:w-[155px]">
            <img src={Cart} alt="" className="size-5" />
            <span
              className="font-semibold text-[15px] md:text-[16px]"
              
            >
              Add to Cart
            </span>
          </button>
          : <div className="border border-slate-500/50 rounded-full bg-red-600/90 text-white flex justify-between px-3 py-2 md:px-4 md:py-2 absolute -bottom-5 left-0 right-0 mx-auto w-[140px] md:w-[155px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={() => handleMinus(products.name)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>{products.countNumber}</p>
          <svg
          onClick={() => handleAdd(products.name)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
           
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>}

      </div>
      <div className="mt-8 mb-3 space-y-2">
        <p className="text-slate-500 ">{products.name}</p>
        <h2 className="font-semibold ">{products.category}</h2>
        <p className="text-red-500 font-semibold">${products.price}</p>
      </div>
    </div>
  );
}
