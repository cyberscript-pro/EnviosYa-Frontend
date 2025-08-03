"use client";
import BottomBar from "@/src/presentation/common/components/BottomBar";
import { PageTransition } from "@/src/presentation/common/components/PageTransition";
import ProductCard from "@/src/presentation/common/components/ProductCard";
import axios from "axios";
import { Raleway, Nunito_Sans, Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const raleway = Raleway({
  variable: "--font-gest-raleway",
  weight: "800",
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  variable: "--font-gest-sans",
  weight: "300",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-gest-poppins",
  subsets: ["latin"],
  weight: "200",
});

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

  const router = useRouter();

  const buscarProductos = async () => {
    try {
      const { data } = await axios.get<Product[]>(
        "https://enviosya-backend-production.up.railway.app/products",
        { withCredentials: true }
      );

      setData(data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const status = err.response.status;

        if (status === 401) {
          navigateTo("/login");
        }
      }
    }
  };

  useEffect(() => {
    buscarProductos();
  }, []);

  const navigateTo = (url: string) => {
    router.push(url);
  };

  return (
    <div className=" w-full min-h-screen">
      <PageTransition />
      <header className="py-4 px-2 flex justify-around items-center gap-4 font-bold sticky top-0 bg-white z-50 shadow-lg">
        <span className={`${raleway.className}`}>EnviosYA</span>
        <input
          type="text"
          className={`${poppins.className} w-full px-2 py-1 text-black placeholder:text-black border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary`}
          placeholder="Search"
        />
      </header>
      {!data && (
        <div className="w-full min-h-screen bg-gray-300 flex justify-center items-center text-xl">
          Cargando...
        </div>
      )}
      <main className="md:max-w-4xl mx-auto px-3 pt-3 pb-20">
        <section className="grid grid-cols-2 gap-3">
          {data?.map((product) => (
            <ProductCard
              key={product.id}
              font={nunito}
              src={product.images[0]}
              alt={product.name}
              title={product.name}
              price={product.price}
            />
          ))}
        </section>
      </main>
      <BottomBar />
    </div>
  );
}

export default HomePage;
