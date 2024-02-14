import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { useUtilities } from '~/services';

export const Methods = ({ blok }: any) => {
  const { extractString } = useUtilities();

  const fileLink = blok?.background_image?.filename;

  return (
    <>
      <section
        {...storyblokEditable(blok)}
        key={blok?._uid}
        id={extractString(blok.navbar_link_name)}
        style={{ backgroundImage: `url('${fileLink}/m/filters:brightness(20):quality(20)')` }}
        className={`relative flex h-fit min-h-screen w-full flex-col items-center justify-between bg-cover`}>
        <img loading="lazy" src="/assets/wave-2.svg" className="relative -top-1 z-10 w-full" />
        <h3 className="py-12 text-center font-poppins text-2xl font-bold text-cpText md:text-4xl lg:text-5xl">{blok.title}</h3>
        <div className="flex w-10/12 flex-col gap-y-10">
          {blok.method_list.map((methodBlok: any) => (
            <StoryblokComponent key={methodBlok._uid} blok={methodBlok} />
          ))}
        </div>
        <img loading="lazy" src="/assets/wave-3.svg" className="relative -bottom-1 z-10 w-full" />
      </section>
    </>
  );
};
