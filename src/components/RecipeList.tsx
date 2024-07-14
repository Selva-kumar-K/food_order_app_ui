import { products } from "../libs/data";
import CartEmpty from "./CartEmpty";

export default function RecipeList() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-10">
      <div className="md:grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
        {products.map((product) => (
          <div className="flex flex-col space-y-8 pb-2 mb-5 bg-[#ffff]">
            <div className="relative min-w-md">
              <div className="md:hidden lg:hidden">
                <img
                  src={product.image.mobile}
                  alt="product-img"
                  className="rounded-xl"
                />
              </div>
              <div className="hidden md:flex lg:hidden">
                <img
                  src={product.image.tablet}
                  alt="product-img"
                  className="rounded-xl"
                />
              </div>
              <div className="hidden md:hidden lg:block">
                <img
                  src={product.image.desktop}
                  alt="product-img"
                  className="rounded-xl"
                />
              </div>
              <button className="absolute w-fit left-0 right-0 -bottom-5 mx-auto flex gap-2 font-semibold px-4 py-2 bg-white border-2 border-slate-300 rounded-full">
                {" "}
                <svg
                  className="h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <g fill="#C73B0F" clip-path="url(#a)">
                    <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                    <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M.333 0h20v20h-20z" />
                    </clipPath>
                  </defs>
                </svg>
                Add to Cart
              </button>
            </div>
            <div className="leading-relaxed">
              <p className="text-slate-500 text-[16px]">{product.category}</p>
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <small className="text-red-400 text-[18px] font-semibold">
                ${product.price}
              </small>
            </div>
          </div>
        ))}
      </div>
      <CartEmpty />
    </div>
  );
}
