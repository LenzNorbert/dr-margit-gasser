import { storyblokEditable } from '@storyblok/react';

export const Feature = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok?._uid} id="feature" className="relative h-screen w-full">
      <h4>Single Feature</h4>
    </div>
  );
};
