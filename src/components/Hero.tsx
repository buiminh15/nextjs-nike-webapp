/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

import {
  SettingContext,
  SettingContextType,
} from 'src/contexts/SettingContext';
import { heroapi } from 'src/data';
import { Product, getProducts } from 'src/utils/storage';

function Hero() {
  const { setOpenMenu } = useContext<SettingContextType>(SettingContext);
  const [productsList, setProductsList] = useState<Product[] | undefined>();
  const products = getProducts();

  useEffect(() => {
    setProductsList(getProducts());
  }, [JSON.stringify(products)]);

  const { title, subtitle, img, btntext, sociallinks, logoImg, videos } =
    heroapi;

  const handleOpenSidebarMenu = () => {
    setOpenMenu(true);
  };
  return (
    <section className="relative mb-12 h-[60vh] px-6 py-6 md:h-[70vh] md:px-10 lg:h-[80vh] lg:px-20">
      <div className="clip-path absolute inset-0 -z-20 bg-gradient-to-b from-blue-800 to-violet-300" />
      <div className="flex items-center justify-between">
        <div className="w-20 lg:w-24">
          <Image src={logoImg} alt="" />
        </div>
        <div className="flex gap-2 text-slate-100 lg:gap-4">
          <MagnifyingGlassIcon className="h-5 cursor-pointer duration-150 ease-in active:scale-110 lg:h-8" />
          <HeartIcon className="h-5 cursor-pointer transition duration-150 ease-in active:scale-110 lg:h-8" />
          <div
            className="group relative transition duration-300 ease-in"
            onClick={handleOpenSidebarMenu}
          >
            <ShoppingBagIcon className="h-5 cursor-pointer duration-150 ease-in group-active:scale-125 lg:h-8" />
            <span className="absolute -bottom-3 left-1/2 grid aspect-square h-4 -translate-x-1/2 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold font-semibold text-black group-active:scale-125 lg:h-6">
              {productsList?.length ? productsList.length : '0'}
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 text-center text-slate-50">
        <p className="text-3xl font-extrabold">{title}</p>
        <p className="text-3xl font-extrabold">{subtitle}</p>
        <button
          className="mt-6 rounded-full bg-slate-100 px-6 py-1 text-sm text-black shadow-md shadow-slate-200 transition duration-200 ease-in-out active:scale-75"
          type="button"
        >
          {btntext}
        </button>
      </div>

      <div className="relative isolate h-fit w-full lg:px-28">
        <div className=" mt-12 flex h-full w-full items-center justify-between">
          <ul className="flex flex-col gap-2">
            {videos.map((v) => (
              <li
                key={`video-${v.id}`}
                className="w-18 md:w-22 lg-w-26 group relative h-16 cursor-pointer overflow-hidden rounded-2xl shadow md:h-20 lg:h-24"
              >
                <Image
                  src={v.imgsrc}
                  alt=""
                  className="relative z-10 h-full w-full transition duration-100 ease-in group-hover:opacity-0"
                />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full object-cover"
                >
                  <source src={v.clip} type="video/mp4" />
                </video>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3">
            {sociallinks.map((link) => (
              <li
                key={`link-${link.id}`}
                className="w-5 cursor-pointer transition duration-200 ease-in hover:scale-110 md:w-8 lg:w-10"
              >
                <Image src={link.icon} alt="" />
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute left-1/2 top-0 -z-10 w-72 -translate-x-1/2 -rotate-[35deg]  transition duration-300 ease-in md:w-[440px] lg:w-[510px] xl:w-2/5">
          <Image src={img} alt="" priority />
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
