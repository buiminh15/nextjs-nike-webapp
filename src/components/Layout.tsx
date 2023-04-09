import React from 'react';
import type { PropsWithChildren } from 'react';

import Footer from './Footer';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="px-6">
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
