/* eslint-disable react-hooks/exhaustive-deps */
import {
  ArchiveBoxXMarkIcon,
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useContext } from 'react';

import {
  ProductContext,
  ProductContextType,
} from 'src/contexts/ProductContext';
import { removeProducts } from 'src/utils/storage';

import emptybag from '../assets/emptybag.png';

import SidebarMenuItem from './SidebarMenuItem';

type SidebarMenuProps = {
  openSidebarMenu: boolean;
  handleCloseSidebarMenu: () => void;
};

function SidebarMenu({
  openSidebarMenu,
  handleCloseSidebarMenu,
}: SidebarMenuProps) {
  const { products, setProducts } =
    useContext<ProductContextType>(ProductContext);

  const handleRemoveAllProducts = () => {
    removeProducts();
    setProducts([]);
  };

  return (
    <div
      className={`fixed inset-0 z-40 h-screen w-full overflow-y-hidden bg-slate-400/60 transition duration-100 ease-out ${
        openSidebarMenu ? `translate-y-0` : `-translate-y-full`
      }`}
    >
      <div
        className={`absolute right-0 top-0 z-50 flex h-full w-full flex-col transition duration-150 ease-in md:w-1/2 lg:w-1/3 ${
          openSidebarMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between bg-white px-4 py-2">
          <div className="flex gap-2">
            <ArrowLeftOnRectangleIcon
              className="h-8 w-auto cursor-pointer"
              onClick={handleCloseSidebarMenu}
            />
            <span className="text-lg font-semibold">Your Cart</span>
            <span className="rounded bg-black px-2 py-1  text-white">
              {products?.length ? products.length : 0} Items
            </span>
          </div>
          <ArchiveBoxXMarkIcon
            className="h-8 cursor-pointer active:scale-90 "
            onClick={handleRemoveAllProducts}
          />
        </div>
        <div className="scrollbar-hide flex flex-[4] flex-col gap-6 overflow-y-scroll scroll-smooth bg-slate-100 px-6 py-3">
          {products.length ? (
            products.map((product) => (
              <SidebarMenuItem
                image={product.imageUrl}
                title={product.title}
                text={product.text}
                price={product.price}
                shadow={product.shadow}
                color={product.color}
                key={product.id}
              />
            ))
          ) : (
            <div className="flex h-screen flex-col items-center justify-center gap-10">
              <Image
                src={emptybag}
                className="h-auto w-40 object-fill"
                alt=""
              />
              <button
                type="button"
                className="flex items-center gap-3 rounded bg-orange-500 px-4 py-2 font-semibold active:bg-orange-700"
                onClick={handleCloseSidebarMenu}
              >
                <ArrowLeftIcon className="w-5" />
                Back to Nike Store
              </button>
            </div>
          )}
        </div>
        <div
          className={`fixed bottom-0 w-full bg-white px-4 py-2 ${
            products.length ? 'visible' : 'hidden'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-bold">SUBTOTAL</span>
            <span className="rounded bg-black px-2 text-sm text-white">
              $200
            </span>
          </div>
          <p className="text-center font-medium">
            Taxes and Shipping Will Calculate At Shipping
          </p>
          <button
            type="button"
            className="mt-2 w-full rounded bg-slate-800 text-lg font-semibold text-white active:bg-slate-900"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
