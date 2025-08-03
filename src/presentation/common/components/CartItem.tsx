import { Minus, RemoveFormatting } from "lucide-react";
import React from "react";
import { FaRemoveFormat } from "react-icons/fa";

type CartItemProps = {
  title: string;
  price: number;
};

function CartItem({ title, price }: CartItemProps) {
  return (
    <section className="border border-gray-200 rounded-xl flex items-center overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="w-36 min-h-28 h-full bg-gray-200 " />
      {/* <div className="w-fit">
        <Image src={src} alt={alt} width={150} height={150} />
      </div> */}

      <div className="p-4">
        <h3 className="mb-2 text-gray-800">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
