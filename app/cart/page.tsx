"use client";
import axios from "axios";
import BottomBar from "@/src/presentation/common/components/BottomBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartItem from "@/src/presentation/common/components/CartItem";
import { PageTransition } from "@/src/presentation/common/components/PageTransition";
import { Raleway, Nunito_Sans, Poppins } from "next/font/google";

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

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://enviosya-backend-production.up.railway.app";

type Cart = {
  items: CartItem[];
};

type CartItem = {
  id: string;
  quantity: number;
  product: Product;
};

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
};

function CartPage() {
  const router = useRouter();

  const [data, setData] = useState<Cart>();

  const userCart = async () => {
    try {
      const { data: cartData } = await axios.get("/cart/me", {
        withCredentials: true,
      });

      setData(cartData);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const status = err.response.status;

        if (status === 401) {
          navigateTo("/login");
        }
      }
    }
  };

  const navigateTo = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    userCart();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <PageTransition />
      <header className="py-4 px-2 flex justify-start items-center gap-4 font-bold sticky top-0 bg-white z-50 shadow-lg">
        <span className={`${raleway.className} pl-2 text-xl`}>Cart</span>
        <div className="w-8 h-8 rounded-full bg-blue-100 shadow-xs flex justify-center items-center">
          {data && data.items.length}
        </div>
      </header>
      <section className="px-2 pt-4">
        {data && data?.items.length > 0 ? (
          data.items.map((item) => (
            <div key={item.id}>
              <CartItem
                key={item.product.id}
                title={item.product.name}
                price={item.product.price}
              />
            </div>
          ))
        ) : (
          <div>No tienes productos en tu carrito</div>
        )}
      </section>
      <BottomBar />
    </div>
  );
}

export default CartPage;
