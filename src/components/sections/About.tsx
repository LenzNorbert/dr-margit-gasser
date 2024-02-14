import { storyblokEditable } from '@storyblok/react';
import { useRef } from 'react';
import { NODE_LI, NODE_PARAGRAPH, render } from 'storyblok-rich-text-react-renderer';

import { VisibilityState, useIsVisible } from '~/hooks/useIsVisible';
import { useUtilities } from '~/services';

const visibilityState: VisibilityState = {
  invisible: 'translate-y-2/3 opacity-0 blur-sm',
  visible: 'translate-y-0 opacity-100 blur-none',
};

export const About = ({ blok }: any) => {
  const ref = useRef(null);
  const { checkVisibility } = useIsVisible();
  const { extractString } = useUtilities();

  const isVisible = checkVisibility(ref, { persistent: true });

  return (
    <section key={blok?._uid} className="w-full" ref={ref}>
      <div
        {...storyblokEditable(blok)}
        id={extractString(blok.navbar_link_name)}
        className={`${visibilityState[isVisible]} glass-effect relative -top-40 z-30 mx-auto min-h-screen w-10/12 rounded-2xl transition-all duration-1000`}>
        <div className="flex w-full flex-col items-center justify-center">
          <img
            loading="lazy"
            alt={blok.image.alt}
            className="my-4 aspect-square w-64 rounded-3xl"
            src={`${blok.image.filename}/m/fit-in/256x256/`}
          />
          <h2 className="py-2 text-center font-poppins text-3xl font-bold md:text-5xl">{blok.title}</h2>
          <h3 className="text-center font-poppins text-2xl opacity-80 md:text-3xl">{blok.subheading}</h3>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 md:p-12 lg:grid-cols-2">
          {blok.information_block.map(({ title, text, large_size }: any) => {
            return (
              <div
                className={`rounded-2xl border-[1px] border-cpText border-opacity-25 p-8 text-justify ${large_size && 'lg:col-span-2'}`}
                key={title}>
                <h4 className="py-4 font-poppins text-2xl md:text-3xl">{title}</h4>
                {render(text, {
                  nodeResolvers: {
                    [NODE_LI]: (children) => (
                      <li className="ml-4 text-left lg:text-justify" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                        {children}
                      </li>
                    ),
                    [NODE_PARAGRAPH]: (children) => <>{children}</>,
                  },
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
