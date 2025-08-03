import { Minus, RemoveFormatting } from "lucide-react";
import React from "react";
import { FaRemoveFormat } from "react-icons/fa";

type CartItemProps = {
  title: string;
  price: number;
};

function CartItem({ title, price }: CartItemProps) {
  return (
    // <div className={`w-full rounded-sm flex items-center p-2 bg-white`}>
    //   <div className="bg-gray-200 w-32" />
    //   {/* <div className="w-fit">
    //     <Image src={src} alt={alt} width={150} height={150} />
    //   </div> */}
    //   <div className="w-full flex flex-col justify-center px-2">
    //     <h3 className="w-52">{title}</h3>
    //     <div className="flex justify-between items-center gap-2 py-2 w-52">
    //       <div className="px-2">${price}</div>
    //     </div>
    //     {/* <div className="flex items-center justify-between">
    //     <div className="flex justify-center items-center">
    //       <button disabled={count === 1} onClick={decrement} className="py-1 px-2 rounded-sm bg-gray-100"><Minus /></button>
    //       <div className="px-1 bg-gray-300">{count}</div>
    //       <button onClick={increment} className="py-1 px-2 rounded-sm bg-gray-100"><Plus /></button>
    //     </div>
    //   </div> */}
    //   </div>
    // </div>
    <main className="p-4">
      <section className="border border-gray-200 rounded-xl flex items-center overflow-hidden shadow-md hover:shadow-lg transition-shadow">

        <div className="w-32 h-full bg-gray-200 " />
        {/* <div className="w-fit">
        <Image src={src} alt={alt} width={150} height={150} />
      </div> */}

        <div className="p-3">
          <h3 className="mb-2 text-gray-800">{title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CartItem;
