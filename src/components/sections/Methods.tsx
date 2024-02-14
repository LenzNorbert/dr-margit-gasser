import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export const Methods = ({ blok }: any) => {
  const fileLink = blok?.background_image?.filename;

  return (
    <>
      <section
        {...storyblokEditable(blok)}
        key={blok?._uid}
        id={blok?._uid}
        style={{ backgroundImage: `url(${fileLink})` }}
        className={`relative flex h-fit min-h-screen w-full flex-col items-center justify-evenly`}>
        <img src="/assets/wave-3.svg" className="relative z-10 w-full" />
        <h3>{blok.title}</h3>
        {blok.method_list.map((methodBlok: any) => (
          <StoryblokComponent key={methodBlok._uid} blok={methodBlok} />
        ))}
        <img src="/assets/wave-4.svg" className="relative -bottom-1 z-10 w-full" />
      </section>
    </>
  );
};
