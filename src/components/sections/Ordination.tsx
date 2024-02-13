import { storyblokEditable } from '@storyblok/react';
import { useRef } from 'react';
import { render } from 'storyblok-rich-text-react-renderer';
import { VisibilityState, useIsVisible } from '~/hooks/useIsVisible';

const visibilityState: VisibilityState = {
  invisible: 'translate-y-2/3 opacity-0 blur-sm',
  visible: 'translate-y-0 opacity-100 blur-none',
};

export const Ordination = ({ blok }: any) => {
  const ref = useRef(null);
  const { checkVisibility } = useIsVisible();
  const isVisible = checkVisibility(ref, { persistent: true });

  return (
    <>
      <img src="/assets/wave-4.svg" className="relative -bottom-1 z-10 w-full" />
      <section
        {...storyblokEditable(blok)}
        key={blok?._uid}
        id={blok?._uid}
        className="relative flex h-fit min-h-screen w-full flex-col items-center justify-evenly bg-cpBeige py-12">
        <h3 className="pb-8 text-center font-poppins text-2xl font-bold text-cpText md:text-4xl lg:text-5xl">{blok.title}</h3>
        <div
          ref={ref}
          className={`${visibilityState[isVisible]} glass-effect flex h-2/3 min-h-60 w-3/4 flex-col items-center justify-evenly rounded-2xl transition-all duration-1000`}>
          {blok?.ordination_content.map(({ title, icon, text, _uid }: { [key: string]: any }) => (
            <div className="flex h-fit flex-col items-center justify-evenly px-12 py-8 [&>*]:my-2" key={_uid}>
              <div className="aspect-square w-16  rounded-2xl bg-cpRed bg-opacity-30 p-3">
                <img src={icon.filename} className="aspect-square w-full" />
              </div>
              <h4 className="text-center font-poppins text-xl font-semibold text-cpText">{title}</h4>
              <p className="w-full whitespace-pre-wrap text-center font-mulish text-lg text-cpText [text-align-last:center] md:text-justify">
                {render(text)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
