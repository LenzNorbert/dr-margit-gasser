import { storyblokEditable } from '@storyblok/react';

export const Header = ({ blok }: any) => {
  return (
    <header {...storyblokEditable(blok)} key={blok?._uid} id={blok?._uid} className="relative h-screen w-full bg-cpBeige">
      <h1 className="font-qtBasker text-4xl text-cpText lg:text-9xl">{blok?.title}</h1>
      <h2>{blok?.subheading}</h2>
    </header>
  );
};
