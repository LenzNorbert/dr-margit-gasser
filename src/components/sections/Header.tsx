import { storyblokEditable } from '@storyblok/react';

export const Header = ({ blok }: any) => {
  return (
    <header
      {...storyblokEditable(blok)}
      key={blok?._uid}
      id={blok?._uid}
      className="relative h-[844px] w-full bg-[url('/assets/bg-header-mobile.svg')] sm:h-[1110px] sm:bg-[url('/assets/bg-header.svg')]">
      <div className="flex h-3/4 w-full flex-col items-center justify-center">
        <h1 className="select-none py-4 text-center font-qtBasker text-5xl text-cpText md:text-6xl lg:text-9xl">{blok?.title}</h1>
        <h2 className="select-none py-4 font-poppins text-2xl font-light md:text-4xl lg:text-5xl">{blok?.subheading}</h2>
      </div>
    </header>
  );
};
