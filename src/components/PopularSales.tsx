import React from 'react';

import { popularsales } from 'src/data';

import SaleItem from './SaleItem';

function PopularSales() {
  const { items, title } = popularsales;
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <SaleItem
            key={item.id}
            btnText={item.btn}
            color={item.color}
            price={item.price}
            imageUrl={item.img}
            rating={item.rating}
            shadow={item.shadow}
            text={item.text}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularSales;
