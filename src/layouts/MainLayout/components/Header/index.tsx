"use client";

import { ImageEnum } from "@/assets";
import { PATHS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import InputSearch from "./InputSearch";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} h-24 bg-white z-50 transition-all duration-500`}>
      <div className="flex items-center justify-between py-8">
        <Link href={PATHS.HOME}>
          <Image src={ImageEnum.logo} alt="Logo" width={100} height={30} />
        </Link>
        <div className="w-2/4 hidden md:block">
          <InputSearch />
        </div>
        <div className="flex items-center gap-6">
          <Link href="#">
            <Image src={ImageEnum.user} alt="User" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image src={ImageEnum.wishList} alt="wishList" width={24} height={24} />
          </Link>
          <Link href={"#"}>
            <Image
              src={ImageEnum.shoppingBag}
              alt="shoppingBag"
              width={24}
              height={24}
            />
          </Link>
        </div>
        {/* <div className="block lg:hidden">
          <SheetMenu />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
