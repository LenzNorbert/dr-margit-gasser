import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export const Page = ({ blok }: any) => {
  return (
    <main
      role="main"
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="relative flex h-full w-full flex-col items-center justify-center">
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
