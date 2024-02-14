import { Link } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';

export interface NavbarProps {
  menuHeadline: string;
  menuItems: Array<{ name: string; id: string }>;
  flipScrollmode?: (payload?: any) => void;
}

export const Navbar = ({ menuHeadline, menuItems, flipScrollmode }: NavbarProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollInView, setScrollInView] = useState(true);
  const prevScrollPosition = useRef(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const currentScrollPosition = window.scrollY;
      setScrollInView(currentScrollPosition < prevScrollPosition.current);
      prevScrollPosition.current = currentScrollPosition;
    });
  }, []);

  const onClick = (menuValue: typeof openMenu, isScrollmodeFlipEnabled: boolean = true) => {
    isScrollmodeFlipEnabled && flipScrollmode && flipScrollmode();
    setOpenMenu(menuValue);
  };

  const openMenuStyle = {
    opened: 'relative block h-screen w-screen xl:fixed xl:h-20 xl:w-full xl:px-4',
    closed: 'relative hidden h-0 w-0 overflow-hidden xl:fixed xl:block xl:h-20 xl:w-full xl:px-4',
  };

  return (
    <>
      <button type="button" className="fixed right-0 z-[100] h-20 w-20 p-4 xl:hidden" onClick={() => onClick(!openMenu)}>
        <img loading="lazy" src="/assets/menu.svg" alt="Button to open navbar" className="h-full w-full" />
      </button>
      <div
        className={`${scrollInView ? 'top-0' : '-top-24'} ${
          openMenuStyle[openMenu ? 'opened' : 'closed']
        } lg:delay-600 z-40 bg-cpBeige transition-all xl:border-b-[1px] xl:border-cpDark
        `}>
        <nav className="relative flex h-full w-full items-center justify-center xl:justify-between">
          <div className="flex h-full w-1 flex-row items-center justify-start px-4 xl:w-1/3">
            <img
              loading="lazy"
              src="/assets/logo.svg"
              className="absolute left-0 right-0 -z-10 m-auto opacity-50 xl:relative xl:m-0 xl:h-3/4 xl:pr-4 xl:opacity-100"
            />
            <Link to="#" className="hidden font-qtBasker text-4xl xl:block">
              {menuHeadline}
            </Link>
          </div>
          <ul className="flex h-3/4 w-10/12 flex-col justify-evenly font-poppins xl:w-2/3 xl:flex-row xl:items-center xl:justify-end">
            {menuItems.map(({ id, name }) => (
              <li key={id} onClick={() => onClick(false, openMenu)}>
                <Link className="flex flex-row items-baseline justify-start text-3xl xl:text-xl" to={`#${id}`}>
                  <span className="pr-1 text-2xl font-semibold text-cpRed  before:content-['#'] xl:px-4 xl:text-3xl xl:font-light xl:before:content-['|']"></span>
                  <span className="text-center text-cpText decoration-cpRed decoration-2 underline-offset-2 hover:underline">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
