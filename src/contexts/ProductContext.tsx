/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { Product, getProducts } from 'src/utils/storage';

export type ProductContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductContext = React.createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
});

function ProductProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts() || []);
  }, []);
  const value = useMemo(
    () => ({ products, setProducts }),
    [JSON.stringify(products)],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
