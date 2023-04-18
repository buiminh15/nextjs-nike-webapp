import { PropsWithChildren, useContext, useEffect, useState } from 'react';

import { SettingContext } from 'src/contexts/SettingContext';

import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import SidebarMenu from './SidebarMenu';

function Layout({ children }: PropsWithChildren) {
  const { openSidebarMenu, setOpenMenu } = useContext(SettingContext);
  const [showHeader, setShowHeader] = useState(false);
  const handleCloseSidebarMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 80) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SidebarMenu
        openSidebarMenu={openSidebarMenu}
        handleCloseSidebarMenu={handleCloseSidebarMenu}
      />

      <div
        className={`fixed top-0 z-50 w-full bg-gradient-to-b from-purple-800 to-violet-400 px-6 py-4 transition duration-300 ease-in ${
          !openSidebarMenu && showHeader ? 'visible' : 'hidden'
        }`}
      >
        <Header />
      </div>

      <Hero />
      <div className="px-6 md:px-10 lg:px-20">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
