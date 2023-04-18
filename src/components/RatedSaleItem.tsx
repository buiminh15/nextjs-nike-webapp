/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';
import Image, { StaticImageData } from 'next/image';
import { useContext } from 'react';

import { ProductContext } from 'src/contexts/ProductContext';

type RatedSaleItemProps = {
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: StaticImageData;
  price: string;
  color: string;
  shadow: string;
  productId: string;
};

function RatedSaleItem({
  title,
  btn,
  color,
  img,
  price,
  rating,
  shadow,
  text,
  productId,
}: RatedSaleItemProps) {
  const { addProductToCart } = useContext(ProductContext);

  const handleAddProductToCart = () => {
    const addedProduct = {
      id: productId,
      text,
      title,
      price,
      color,
      shadow,
      imageUrl: img,
    };
    addProductToCart(addedProduct);
  };
  return (
    <div
      className={` rounded-lg  bg-gradient-to-b py-4 text-center  transition
    duration-300
    ease-in
    hover:scale-105 ${color} ${shadow}`}
    >
      <p className="text-lg font-bold text-slate-100">{title}</p>
      <p className="text-slate-100">{text}</p>
      <div className="flex items-center justify-center gap-6 ">
        <span className="rounded-md bg-slate-100 px-2 font-semibold">
          ${price}
        </span>
        <div className="flex items-center gap-1   text-slate-100">
          <StarIcon className="h-4 w-4 " />
          <span>{rating}</span>
        </div>
      </div>
      <div className="mt-2 inline-flex items-center gap-5">
        <span
          className="cursor-pointer rounded-md bg-slate-100 p-1"
          onClick={handleAddProductToCart}
        >
          <ShoppingBagIcon className="h-6 " />
        </span>
        <button className="rounded-md bg-slate-100 px-2 py-1" type="button">
          {btn}
        </button>
      </div>
      <div
        className="mx-auto mt-2 w-1/2  transition
    duration-300
    ease-in
    hover:rotate-12"
      >
        <Image src={img} alt="" className="object-cover" />
      </div>
    </div>
  );
}

export default RatedSaleItem;
