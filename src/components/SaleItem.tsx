import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

type SaleItemProps = {
  imageUrl: StaticImageData;
  title: string;
  text: string;
  rating: string;
  btnText: string;
  price: string;
  color: string;
  shadow: string;
};

function SaleItem({
  btnText,
  color,
  imageUrl,
  price,
  rating,
  shadow,
  text,
  title,
}: SaleItemProps) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg 
      bg-gradient-to-b ${color} ${shadow}
      py-4
      pl-6
      transition
      duration-300
      ease-in
      hover:scale-105
      `}
    >
      <div>
        <p className="text-lg font-semibold text-slate-100">{title}</p>
        <p className="text-slate-100">{text}</p>
        <div className="mt-2 flex items-center gap-6">
          <span className="rounded-md bg-slate-100 px-2 font-semibold">
            ${price}
          </span>
          <div className="flex items-center gap-1   text-slate-100">
            <StarIcon className="h-4 w-4 " />
            <span>{rating}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-5">
          <span className="cursor-pointer rounded-md bg-slate-100 p-1">
            <ShoppingBagIcon className="h-6 " />
          </span>
          <button className="rounded-md bg-slate-100 px-2 py-1" type="button">
            {btnText}
          </button>
        </div>
      </div>

      <div className=" h-fit w-52 -rotate-[40deg] transition duration-500 ease-in hover:-rotate-12">
        <Image src={imageUrl} alt="" className="object-cover" />
      </div>
    </div>
  );
}

export default SaleItem;
