"use client";
import BottomBar from "@/src/presentation/common/components/BottomBar";
import ProductCard from "@/src/presentation/common/components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
};

function HomePage() {
  const [data, setData] = useState<Product[]>();

  const buscarProductos = async () => {
    try {
      const { data } = await axios.get<Product[]>(
        "https://enviosya-backend-production.up.railway.app/products"
      );

      setData(data);
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    }
  };

  useEffect(() => {
    buscarProductos();
  }, []);

  return (
    <div className=" w-full min-h-screen">
      {!data && (
        <div className="w-full min-h-screen bg-gray-300 flex justify-center items-center text-xl">
          Cargando...
        </div>
      )}
      <div className="p-3 bg-gray-300 w-full min-h-screen flex flex-col gap-3">
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            src={"/next.svg"}
            alt={product.name}
            title={product.name}
            price={product.price}
            descuento={0.22}
            tag="Envio gratis"
          />
        ))}
      </div>
      <BottomBar />
    </div>
  );
}

export default HomePage;
