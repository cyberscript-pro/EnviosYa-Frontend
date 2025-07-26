import React from "react";
import BarItem from "./BarItem";
import {
  AlignJustify,
} from "lucide-react";
import {
  BuildingStorefrontIcon,
  CubeIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

function BottomBar() {

  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between px-2 items-center w-full h-16 bg-white/95">
      <BarItem
        title="Menu"
        icon={AlignJustify}
        tag="menu"
        pathname={pathname}
      />
      <BarItem
        title="Tienda"
        icon={BuildingStorefrontIcon}
        tag="store"
        pathname={pathname}
      />
      <BarItem
        title="Productos"
        icon={CubeIcon}
        tag="products"
        pathname={pathname}
      />
      <BarItem
        title="Carrito"
        icon={ShoppingBagIcon}
        tag="cart"
        pathname={pathname}
      />
      <BarItem
        title="Perfil"
        icon={UserCircleIcon}
        tag="profile"
        pathname={pathname}
      />
    </div>
  );
}

export default BottomBar;
