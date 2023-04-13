import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import Layout from 'src/components/Layout';
import { SettingProvider } from 'src/contexts/SettingContext';

import 'src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SettingProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </SettingProvider>
  );
}
