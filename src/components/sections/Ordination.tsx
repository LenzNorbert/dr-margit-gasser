import { storyblokEditable } from '@storyblok/react';

export const Ordination = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok?._uid} id="ordination" className="relative h-screen w-full">
      <h1>Ordination</h1>
    </div>
  );
};
