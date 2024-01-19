import { storyblokEditable } from '@storyblok/react';

export const AboutPersonal = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok?._uid} id="about-personal" className="relative h-screen w-full">
      <h4>Single AboutPersonal</h4>
    </div>
  );
};
