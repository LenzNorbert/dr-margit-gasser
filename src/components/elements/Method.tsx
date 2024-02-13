import { storyblokEditable } from '@storyblok/react';

export const Method = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok?._uid} id="feature" className="relative h-screen w-full">
      <h4>Single Method</h4>
    </div>
  );
};
