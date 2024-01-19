import { storyblokEditable } from '@storyblok/react';

export const Header = ({ blok }: any) => {
  return (
    <header {...storyblokEditable(blok)} key={blok?._uid} id="header" className="relative h-screen w-full">
      <h1 className="font-qtBasker text-9xl">Dr. Margit Gasser</h1>
    </header>
  );
};
