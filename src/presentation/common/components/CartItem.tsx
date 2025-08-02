import { Minus, RemoveFormatting } from "lucide-react";
import React from "react";
import { FaRemoveFormat } from "react-icons/fa";

type CartItemProps = {
  title: string;
  price: number;
};

function CartItem({ title, price }: CartItemProps) {
  return (
    <div className={`w-full rounded-sm flex items-center p-2 bg-white`}>
      <div className="w-fit">
        {/* <Image src={src} alt={alt} width={150} height={150} /> */}
      </div>
      <div className="w-full flex flex-col justify-center px-2">
        <h3 className="w-52">{title}</h3>
        <div className="flex justify-between items-center gap-2 py-2 w-52">
          <div className="px-2">${price}</div>
        </div>
        <div className="flex items-center justify-between">
          <button className="flex justify-center items-center py-2 px-4 rounded-sm bg-amber-400">
            <Minus className="w-6 h-6 pr-2 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
