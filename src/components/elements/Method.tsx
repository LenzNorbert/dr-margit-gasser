import { storyblokEditable } from '@storyblok/react';
import { NODE_LI, NODE_PARAGRAPH, render } from 'storyblok-rich-text-react-renderer';

export const Method = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok?._uid}
      id="feature"
      className={`relative flex w-full ${blok.flip_content ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col justify-center md:gap-10`}>
      <div className="w-full rounded-t-2xl bg-white p-8 text-justify text-cpText md:w-3/5 md:rounded-2xl md:shadow-cpRed md:drop-shadow-2xl">
        <h4 className="py-4 text-center font-poppins text-xl font-semibold ">{blok.title}</h4>
        <div className="font-mulish font-normal">
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
      <img
        loading="lazy"
        alt={blok.image.alt}
        className="aspect-square max-h-64 w-full min-w-64 rounded-b-2xl object-cover object-center md:max-h-none md:w-1/5 md:rounded-2xl md:shadow-cpRed md:drop-shadow-2xl"
        src={`${blok.image.filename}/m/fit-in/500x500/filters:quality(70)`}
      />
    </div>
  );
};
