/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';

import { Product, getProducts, saveProduct } from 'src/utils/storage';

export type ProductContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addProductToCart: (payload: Omit<Product, 'quantity'>) => void;
  removeProduct: (id: string) => void;
  setIncreaseItemQTY: (id: string) => void;
  setDecreaseItemQTY: (id: string) => void;
};

const ProductContext = React.createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
  addProductToCart: () => {},
  removeProduct: () => {},
  setIncreaseItemQTY: () => {},
  setDecreaseItemQTY: () => {},
});

function ProductProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts() || []);
  }, []);

  const addProductToCart = (payload: Omit<Product, 'quantity'>) => {
    const itemIndex = products.findIndex((item) => item.id === payload.id);
    if (itemIndex >= 0) {
      products[itemIndex].quantity += 1;
    } else {
      products.push({ ...payload, quantity: 1 });
    }
    setProducts([...products]);
    saveProduct([...products]);

    toast.success(`${payload.text} added to cart`);
  };

  const removeProduct = (id: string) => {
    const remainedProducts = products.filter((p) => p.id !== id);
    setProducts([...remainedProducts]);
    saveProduct([...remainedProducts]);
  };

  const setIncreaseItemQTY = (id: string) => {
    const itemIndex = products.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      products[itemIndex].quantity += 1;
    }
    toast.success(`Item quantity Increased`);
    setProducts([...products]);
    saveProduct([...products]);
  };
  const setDecreaseItemQTY = (id: string) => {
    const itemIndex = products.findIndex((item) => item.id === id);
    if (products[itemIndex].quantity > 1) {
      products[itemIndex].quantity -= 1;
    }
    toast.success(`Item quantity Decreased`);
    setProducts([...products]);
    saveProduct([...products]);
  };

  const value = useMemo(
    () => ({
      products,
      setProducts,
      addProductToCart,
      removeProduct,
      setIncreaseItemQTY,
      setDecreaseItemQTY,
    }),
    [JSON.stringify(products)],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
