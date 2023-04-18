/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';
import Image, { StaticImageData } from 'next/image';
import React, { useContext } from 'react';

import { ProductContext } from 'src/contexts/ProductContext';

type SaleItemProps = {
  imageUrl: StaticImageData;
  title: string;
  text: string;
  rating: string;
  btnText: string;
  price: string;
  color: string;
  shadow: string;
  productId: string;
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
  productId,
}: SaleItemProps) {
  const { addProductToCart } = useContext(ProductContext);
  const handleAddProductToCart = () => {
    const addedProduct = {
      id: productId,
      text,
      title,
      price,
      color,
      shadow,
      imageUrl,
    };
    addProductToCart(addedProduct);
  };

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
          <span
            className="cursor-pointer rounded-md bg-slate-100 p-1"
            onClick={handleAddProductToCart}
          >
            <ShoppingBagIcon className="h-6 " />
          </span>
          <button className="rounded-md bg-slate-100 px-2 py-1" type="button">
            {btnText}
          </button>
        </div>
      </div>

      <div className=" h-fit w-60 -rotate-[40deg] transition duration-500 ease-in hover:-rotate-12 lg:w-72">
        <Image src={imageUrl} alt="" className="object-cover" />
      </div>
    </div>
  );
}

export default React.memo(SaleItem);
