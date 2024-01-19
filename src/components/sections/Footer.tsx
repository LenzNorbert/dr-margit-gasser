import { storyblokEditable } from '@storyblok/react';

export const Footer = ({ blok }: any) => {
  return (
    <footer {...storyblokEditable(blok)} key={blok?._uid} id="footer" className="relative h-screen w-full">
      <h1>Footer</h1>
    </footer>
  );
};
