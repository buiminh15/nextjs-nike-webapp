import type { PropsWithChildren } from 'react';
import React from 'react';
import Footer from './Footer';
import Hero from './Hero';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="px-6">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
