import { PropsWithChildren, useContext } from 'react';

import { SettingContext } from 'src/contexts/SettingContext';

import Footer from './Footer';
import Hero from './Hero';
import SidebarMenu from './SidebarMenu';

function Layout({ children }: PropsWithChildren) {
  const { openSidebarMenu, setOpenMenu } = useContext(SettingContext);

  const handleCloseSidebarMenu = () => {
    setOpenMenu(false);
  };
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SidebarMenu
        openSidebarMenu={openSidebarMenu}
        handleCloseSidebarMenu={handleCloseSidebarMenu}
      />
      <Hero />
      <div className="px-6 md:px-10 lg:px-20">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
