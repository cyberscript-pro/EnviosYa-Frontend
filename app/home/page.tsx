"use client";
import ProductCard from "@/src/presentation/common/components/card";
import useApiGet from "@/src/presentation/common/hooks/useApiGet";
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
  // const { data, loading, refetch } = useApiGet({
  //   url: "http://localhost:5063/products",
  // });

  const buscarProductos = async () => {
    try {
      const { data } = await axios.get<Product[]>(
        "http://localhost:5063/products"
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

  if (!data) return <div>Cargando...</div>;

  return (
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
  );
}

export default HomePage;
