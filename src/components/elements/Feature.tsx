import { NODE_LI, NODE_PARAGRAPH, render } from 'storyblok-rich-text-react-renderer';
import { storyblokEditable } from '@storyblok/react';
import { useRef, useState } from 'react';
import { VisibilityState, useIsVisible } from '~/hooks/useIsVisible';

const visibilityState: VisibilityState = {
  invisible: '-translate-x-1/3 opacity-0 blur-sm',
  visible: 'translate-x-0 opacity-100 blur-none',
};

export const Feature = ({ blok }: any) => {
  const ref = useRef(null);
  const { checkVisibility } = useIsVisible();
  const [expanded, setExpanded] = useState(false);
  const isVisible = checkVisibility(ref, { persistent: true });

  return (
    <li
      ref={ref}
      {...storyblokEditable(blok)}
      key={blok?._uid}
      id="features"
      className={`glass-effect relative mx-auto flex h-auto w-full flex-col items-center justify-center rounded-2xl p-8 shadow-cpRed drop-shadow-2xl transition-all duration-1000 ${visibilityState[isVisible]}`}>
      <div className="aspect-square w-16 rounded-2xl bg-cpRed bg-opacity-30 p-3">
        <img loading="lazy" src={blok.icon.filename} alt={blok.icon.alt} className="aspect-square w-full" />
      </div>
      <h4 className="py-4 text-center font-poppins text-xl font-semibold text-cpText">{blok.title}</h4>
      <span className="text-center font-mulish">{blok.preview_text}</span>
      {blok.description && (
        <button type="button" className="py-4 font-poppins font-semibold text-cpGreen" onClick={() => setExpanded(!expanded)}>
          {blok.learn_more}
        </button>
      )}
      <div className={`${expanded ? 'block' : 'hidden'} w-10/12`}>
        <hr className="w-full border-t-2 border-cpText border-opacity-50 pb-4" />
        <div className="flex justify-center text-justify font-mulish text-cpText">
          {render(blok.description, {
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
      </div>
    </li>
  );
};
