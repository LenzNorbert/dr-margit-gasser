import { storyblokEditable } from '@storyblok/react';

export const About = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok?._uid} id="about" className="relative h-screen w-full">
      <h1>About</h1>
    </div>
  );
};
