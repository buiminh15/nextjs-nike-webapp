import { isWindow } from './common';

const LOCAL_VARS = {
  PRODUCTS: 'products',
};

export type Product = {
  id: string;
  title: string;
  text: string;
  price: string;
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

const saveProduct = (product: Product): void => {
  if (isWindow()) {
    const products = getProducts();
    if (products) {
      const productsList = [...products, product];
      localStorage.setItem(LOCAL_VARS.PRODUCTS, JSON.stringify(productsList));
    }
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

export { getProducts, saveProduct, removeProduct, LOCAL_VARS };