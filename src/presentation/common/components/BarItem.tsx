import { useRouter } from "next/navigation";
import React, { ComponentType, SVGProps } from "react";

type BarItemProps = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tag: string;
  pathname: string;
};

function BarItem({ title, icon: Icon, tag, pathname }: BarItemProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${tag}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full h-full p-2 flex flex-col items-center justify-center ${
        pathname === `/${tag}` ? "bg-amber-200 text-amber-600" : ""
      } cursor-pointer`}
    >
      <Icon
        className={`w-6 h-6 ${
          pathname === `/${tag}` ? "text-amber-600" : "text-gray-700"
        }`}
      />
      <span className="text-sm">{title}</span>
    </div>
  );
}

export default BarItem;
