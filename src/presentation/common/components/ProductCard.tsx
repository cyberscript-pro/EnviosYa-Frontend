import { Minus, Plus, ShoppingBag, ShoppingCart } from "lucide-react";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const nunito = Nunito_Sans({
  variable: "--font-gest-sans",
  weight: "700",
  subsets: ["latin"],
});

type ProductCardProps = {
  id: string;
  openSheet: () => void;
  font: NextFontWithVariable;
  src: string;
  alt: string;
  title: string;
  price: number;
};

function ProductCard({
  id,
  openSheet,
  font,
  src,
  alt,
  title,
  price,
}: ProductCardProps) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      onClick={openSheet}
      className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Placeholder de imagen */}
      <div className="bg-gray-200 h-42 w-full" />
      {/* <div className="w-fit">
        <Image src={src} alt={alt} width={150} height={150} />
      </div> */}

      <div className="p-3">
        <h3 className={`${font.className} mb-2 text-gray-800`}>{title}</h3>
        {/* <p className="text-gray-600 mb-4">
          {product.description}
        </p> */}
        <div className="flex justify-between items-center">
          <span className={`${nunito.className} text-lg text-gray-900`}>
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
