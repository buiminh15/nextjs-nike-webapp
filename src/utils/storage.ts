import { StaticImageData } from 'next/image';

import { isWindow } from './common';

const LOCAL_VARS = {
  PRODUCTS: 'products',
};

export type Product = {
  id: string;
  title: string;
  text: string;
  price: string;
  color: string;
  shadow: string;
  quantity: number;
  imageUrl: StaticImageData;
};

const getProducts = (): Product[] => {
  if (isWindow()) {
    const products = localStorage.getItem(LOCAL_VARS.PRODUCTS);
    if (typeof products === 'string') {
      return JSON.parse(products);
    }
  }

  return [];
};

const saveProduct = (products: Product[]): void => {
  if (isWindow()) {
    localStorage.setItem(LOCAL_VARS.PRODUCTS, JSON.stringify(products));
  }
};

const removeProduct = (id: string): void => {
  if (isWindow()) {
    const products = getProducts();
    if (products.length) {
      const productsList = products.filter((product) => product.id !== id);
      localStorage.setItem(LOCAL_VARS.PRODUCTS, JSON.stringify(productsList));
    }
  }
};

const removeProducts = (): void => {
  if (isWindow()) {
    localStorage.removeItem(LOCAL_VARS.PRODUCTS);
  }
};

export { getProducts, saveProduct, removeProduct, LOCAL_VARS, removeProducts };
