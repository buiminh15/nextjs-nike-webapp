import type { PropsWithChildren } from 'react';

import Footer from './Footer';
import Hero from './Hero';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="px-6 md:px-10 lg:px-20">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
