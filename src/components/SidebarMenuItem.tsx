import { TrashIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import Image, { StaticImageData } from 'next/image';
import { useContext } from 'react';

import { ProductContext } from 'src/contexts/ProductContext';

type SidebarMenuItemProps = {
  image: StaticImageData;
  title: string;
  text: string;
  price: string;
  color: string;
  shadow: string;
  productId: string;
  quantity: number;
};

function SidebarMenuItem({
  image,
  title,
  text,
  price,
  color,
  shadow,
  quantity,
  productId,
}: SidebarMenuItemProps) {
  const { removeProduct, setIncreaseItemQTY, setDecreaseItemQTY } =
    useContext(ProductContext);

  const handleRemoveProduct = () => {
    removeProduct(productId);
  };

  const handleIncreaseItem = () => {
    setIncreaseItemQTY(productId);
  };
  const handleDecreaseItem = () => {
    setDecreaseItemQTY(productId);
  };

  return (
    <div className="flex gap-3">
      <div
        className={`relative flex-[3] bg-gradient-to-b ${color} ${shadow} flex select-none justify-center rounded p-2`}
      >
        <Image src={image} className="h-auto w-32 object-fill" alt="" />
        <span className="absolute right-1 top-1 rounded bg-slate-100 px-1 text-sm font-semibold">
          ${price}
        </span>
      </div>
      <div className="flex flex-[5] select-none flex-col justify-between">
        <div className="flex flex-col">
          <span className="font-bold text-slate-800">{title}</span>
          <span className="leading-none">{text}</span>
        </div>
        <div className="flex gap-5">
          <span className="grid cursor-pointer items-center rounded bg-slate-900 px-1 text-white active:scale-90">
            <MinusIcon
              className="w-5 text-white"
              onClick={handleDecreaseItem}
            />
          </span>
          <span className="grid select-none items-center rounded bg-slate-900 px-3 text-white">
            {quantity}
          </span>
          <span className="grid cursor-pointer items-center rounded bg-slate-900 px-1 text-white active:scale-90">
            <PlusIcon className="h-7 w-5" onClick={handleIncreaseItem} />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-between">
        <span className="select-none text-lg font-bold">
          ${Number(price) * quantity}
        </span>
        <span className="cursor-pointer rounded bg-slate-900 p-1 active:scale-90">
          <TrashIcon className="h-5 text-white" onClick={handleRemoveProduct} />
        </span>
      </div>
    </div>
  );
}

export default SidebarMenuItem;
