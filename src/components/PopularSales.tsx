import { popularsales } from 'src/data';

import SaleItem from './SaleItem';

function PopularSales() {
  const { items, title } = popularsales;
  return (
    <section>
      <h1 className="mb-6 text-4xl font-bold lg:text-3xl">{title}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}

export default PopularSales;
