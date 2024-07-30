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

type Products = {
  items: Items[];
  total: number;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ConfirmCard({ items, total, setState }: Products) {
  return (
    <div className="absolute w-[90%] left-0 right-0 -top-28 md:top-0 h-fit mx-auto md:w-[40%] xl:w-[30%] bg-white rounded-lg">
      <div className="p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-7 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1 className="font-semibold text-2xl">Order Confirmed</h1>
        <p className="text-slate-400 mt-2 text-sm">
          We hope you enjoy your food 😋
        </p>
        <div className="mt-4">
          {items.map((product) => {
            if (product.countNumber >= 1) {
              return (
                <div className="mb-4 flex items-center space-x-4">
                  <img src={product.image.thumbnail} className="w-16"/>
                  <div className="">
                    <p className="text-[15px] font-semibold">{product.name}</p>
                    <span className="text-red-500 font-semibold">
                      {product.countNumber}x{" "}
                      <span className="text-slate-600">@{product.price}</span>
                    </span>
                  </div>
                </div>
              );
            }
          })}
          <div className="flex items-center justify-between">
            <p>Order Total</p>
            <p className="font-semibold text-xl">${total}</p>
          </div>

          <div className="flex flex-col mt-4">
            <button
              className="bg-red-700/90 text-white rounded-full py-2 hover:bg-red-600"
              onClick={() => setState((prev) => !prev)}
            >
              Start New Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
