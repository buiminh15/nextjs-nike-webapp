/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useContext } from 'react';

import {
  ProductContext,
  ProductContextType,
} from 'src/contexts/ProductContext';
import {
  SettingContext,
  SettingContextType,
} from 'src/contexts/SettingContext';
import { heroapi } from 'src/data';

function Header() {
  const { setOpenMenu } = useContext<SettingContextType>(SettingContext);
  const { products } = useContext<ProductContextType>(ProductContext);
  const { logoImg } = heroapi;

  const handleOpenSidebarMenu = () => {
    setOpenMenu(true);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="w-20 lg:w-24">
        <Image src={logoImg} alt="" />
      </div>
      <div className="flex gap-2 text-slate-100 lg:gap-4">
        <MagnifyingGlassIcon className="h-5 cursor-pointer duration-150 ease-in active:scale-110 md:h-6 lg:h-8" />
        <HeartIcon className="h-5 cursor-pointer transition duration-150 ease-in active:scale-110 md:h-6 lg:h-8" />
        <div
          className="group relative transition duration-300 ease-in"
          onClick={handleOpenSidebarMenu}
        >
          <ShoppingBagIcon className="h-5 cursor-pointer duration-150 ease-in group-active:scale-125 md:h-6 lg:h-8" />
          <span className="absolute -bottom-3 left-1/2 grid aspect-square h-4 -translate-x-1/2 select-none items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-black group-active:scale-125 md:h-5 lg:h-6">
            {products?.length ? products.length : '0'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
