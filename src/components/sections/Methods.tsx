import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export const Methods = ({ blok }: any) => {
  return (
    <section
      {...storyblokEditable(blok)}
      key={blok?._uid}
      id={blok?._uid}
      className="relative flex h-fit min-h-screen w-full flex-col items-center justify-evenly py-12"></section>
  );
};
