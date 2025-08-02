"use client";
import axios from "axios";
import BottomBar from "@/src/presentation/common/components/BottomBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartItem from "@/src/presentation/common/components/CartItem";

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
    <div>
      <div>
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
      </div>
      <BottomBar />
    </div>
  );
}

export default CartPage;
