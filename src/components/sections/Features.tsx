import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { useState } from 'react';

export const Features = ({ blok }: any) => {
  const defaultFeaturesShown = 3;
  const [featuresShown, setFeaturesShown] = useState(defaultFeaturesShown);

  return (
    <>
      <img src="/assets/wave-2.svg" className="relative -bottom-1 z-10 w-full" />
      <section
        {...storyblokEditable(blok)}
        key={blok?._uid}
        id={blok?._uid}
        className="relative -top-16 z-10 flex h-auto w-full flex-col items-center justify-center bg-cpBeige">
        <img src="/assets/logo.svg" className="absolute bottom-0 left-0 right-0 top-0 m-auto w-1/5 opacity-50" />
        <h3 className="pb-12 text-center font-poppins text-2xl font-bold text-cpText md:text-4xl lg:text-5xl">{blok.title}</h3>
        <ul className="flex w-10/12 flex-col gap-8">
          {blok.feature_list.slice(0, featuresShown).map((featureBlok: any) => (
            <StoryblokComponent key={featureBlok._uid} blok={featureBlok} />
          ))}
        </ul>
        <button
          className="flex flex-col items-center justify-center py-8 font-poppins text-xl font-bold text-cpRed"
          onClick={() => setFeaturesShown((length) => (length > 3 ? defaultFeaturesShown : blok.feature_list.length))}>
          {featuresShown > 3 ? blok.collapse_button_name : blok.expand_button_name}
          <img className={`spect-square h-8 ${featuresShown > 3 && 'rotate-180'}`} src={blok.button_icon.filename} />
        </button>
      </section>
      <img src="/assets/wave-3.svg" className="relative -top-16 z-10 w-full" />
    </>
  );
};
