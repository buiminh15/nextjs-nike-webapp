import React, { PropsWithChildren, useMemo, useState } from 'react';

export type SettingContextType = {
  openSidebarMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingContext = React.createContext<SettingContextType>({
  openSidebarMenu: false,
  setOpenMenu: () => {},
});

function SettingProvider({ children }: PropsWithChildren) {
  const [openSidebarMenu, setOpenMenu] = useState(false);
  const value = useMemo(
    () => ({ openSidebarMenu, setOpenMenu }),
    [openSidebarMenu],
  );

  return (
    <SettingContext.Provider value={value}>{children}</SettingContext.Provider>
  );
}

export { SettingContext, SettingProvider };
