import Image from "next/image";

type ProductCardProps = {
  src: string;
  alt: string;
  title: string;
  price: number;
  descuento: number;
  tag: string;
};

function ProductCard({
  src,
  alt,
  title,
  price,
  descuento,
  tag,
}: ProductCardProps) {
  return (
    <div className={`w-full rounded-sm flex items-center p-2 bg-white`}>
      <div className="w-fit">
        <Image src={src} alt={alt} width={150} height={150} />
      </div>
      <div className="w-full flex flex-col justify-center px-2">
        <h3 className="w-52">{title}</h3>
        <div className="flex justify-between items-center gap-2 py-2 w-52">
          <div className="px-2">${price}</div>
          <div className="text-sm text-red-600">${descuento}</div>
          <div className="text-xs bg-green-300 px-1 rounded-sm flex justify-center items-center text-green-900">
            {tag}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center">
            <button className="py-1 px-2 rounded-sm bg-gray-100">+</button>
            <div className="px-1 bg-gray-300">1</div>
            <button className="py-1 px-2 rounded-sm bg-gray-100">+</button>
          </div>
          <button className="flex py-2 px-4 rounded-sm bg-amber-400">
            <div>icon</div>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
