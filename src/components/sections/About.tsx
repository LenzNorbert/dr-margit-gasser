import { storyblokEditable } from '@storyblok/react';

export const About = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok?._uid} id={blok?._uid} className="relative h-screen w-full">
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.54)',
          backdropFilter: 'blur(6.5px)',
          WebkitBackdropFilter: 'blur(6.5px)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.87)',
        }}
        className="h-full w-10/12">
        test
      </div>
    </div>
  );
};
