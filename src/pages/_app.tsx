import type { AppProps } from 'next/app';

import Layout from 'src/components/Layout';
import { SettingProvider } from 'src/contexts/SettingContext';

import 'src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SettingProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SettingProvider>
  );
}
