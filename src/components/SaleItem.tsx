import Image, { StaticImageData } from 'next/image';
import React from 'react';

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
    <div className={`flex ${color} `}>
      <div>
        <p>{title}</p>
        <p>{text}</p>
        <div>
          <span>{price}</span>
          <div>
            <span>{rating}</span>
          </div>
        </div>
        <div>
          <span>Bag</span>
          <button type="button">{btnText}</button>
        </div>
      </div>

      <div>
        <Image src={imageUrl} alt="" width={100} height={100} />
      </div>
    </div>
  );
}

export default SaleItem;
