import {
  ArchiveBoxXMarkIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

type SidebarMenuProps = {
  openSidebarMenu: boolean;
  handleCloseSidebarMenu: () => void;
};

function SidebarMenu({
  openSidebarMenu,
  handleCloseSidebarMenu,
}: SidebarMenuProps) {
  return (
    <div
      className={`absolute inset-0 z-40 min-h-screen w-full overflow-y-hidden bg-slate-400/60 transition duration-100 ease-out ${
        openSidebarMenu ? `translate-y-0` : `-translate-y-full`
      }`}
    >
      <div
        className={`absolute right-0 top-0 z-50 h-full w-1/3 bg-slate-200 transition duration-150 ease-in ${
          openSidebarMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between bg-white px-4 py-2">
          <div className="flex gap-2">
            <ArrowLeftOnRectangleIcon
              className="h-8 cursor-pointer"
              onClick={handleCloseSidebarMenu}
            />
            <span className="text-lg font-semibold">Your Cart</span>
            <span className="rounded bg-black px-2 py-1  text-white">
              Items
            </span>
          </div>
          <ArchiveBoxXMarkIcon className="h-8 cursor-pointer" />
        </div>
        <div className="grid h-screen place-items-center">
          <button type="button" onClick={handleCloseSidebarMenu}>
            Back to Nike Store
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
