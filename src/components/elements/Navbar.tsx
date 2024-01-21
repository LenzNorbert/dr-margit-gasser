import { useState } from 'react';

export interface NavbarProps {
  menuItems: Array<{ name: string; id: string }>;
  onClick?: (e: any) => void;
}

export const Navbar = ({ menuItems, onClick = (e) => {} }: NavbarProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <button
        className="fixed right-0 z-50 h-20 w-20 p-4 xl:hidden"
        onClick={(e) => {
          onClick(e);
          setOpenMenu(!openMenu);
        }}
        name="Menubutton">
        <img src="/assets/menu.svg" alt="Button to open navbar" className="h-full w-full" />
      </button>
      <div
        className={`z-10 bg-cpBeige transition-all xl:border-b-[1px] xl:border-cpDark ${
          openMenu
            ? 'relative block h-screen w-screen xl:fixed xl:h-20 xl:w-full xl:px-4'
            : 'relative hidden h-0 w-0 overflow-hidden xl:fixed xl:block xl:h-20 xl:w-full xl:px-4'
        }`}>
        <nav className="relative flex h-full w-full items-center justify-center xl:justify-between">
          <div className="flex h-full w-1/3 flex-row items-center justify-start px-4">
            <img
              src="/assets/logo.svg"
              className="absolute left-0 right-0 -z-10 m-auto opacity-50 xl:relative xl:m-0 xl:h-3/4 xl:pr-4 xl:opacity-100"
            />
            <span className="hidden font-qtBasker text-4xl xl:block">Dr. Margit Gasser</span>
          </div>
          <ul className="flex h-3/4 w-10/12 flex-col justify-evenly font-poppins xl:w-2/3 xl:flex-row xl:items-center xl:justify-end">
            {menuItems.map(({ id, name }) => {
              return (
                <li key={id}>
                  <a className="flex flex-row items-baseline justify-start text-3xl xl:text-xl" href={`#${id}`}>
                    <span className="pr-1 text-2xl font-semibold text-cpRed  before:content-['#'] xl:px-4 xl:text-3xl xl:font-light xl:before:content-['|']"></span>
                    <span className="text-center text-cpText">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
