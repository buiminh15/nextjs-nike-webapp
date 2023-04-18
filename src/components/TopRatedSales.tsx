import { toprateslaes } from 'src/data';

import RatedSaleItem from './RatedSaleItem';

function TopRatedSales() {
  const { title, items } = toprateslaes;
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold lg:text-3xl">{title}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <RatedSaleItem
            key={item.id}
            title={item.title}
            btn={item.btn}
            color={item.color}
            price={item.price}
            img={item.img}
            rating={item.rating}
            shadow={item.shadow}
            text={item.text}
            productId={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default TopRatedSales;
