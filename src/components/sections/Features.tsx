import { storyblokEditable } from '@storyblok/react';

export const Features = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok?._uid} id={blok?._uid} className="relative h-screen w-full">
      <h1>Features</h1>
    </div>
  );
};
