import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import Layout from 'src/components/Layout';
import { ProductProvider } from 'src/contexts/ProductContext';
import { SettingProvider } from 'src/contexts/SettingContext';

import 'src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SettingProvider>
      <ProductProvider>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </ProductProvider>
    </SettingProvider>
  );
}
