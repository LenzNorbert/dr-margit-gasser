import { storyblokEditable } from '@storyblok/react';

export const Methods = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok?._uid} id="methods" className="relative h-screen w-full">
      <h1>Methods</h1>
    </div>
  );
};
