import { storyblokEditable } from '@storyblok/react';
import { NODE_HEADING, NODE_IMAGE, NODE_LI, NODE_PARAGRAPH, render } from 'storyblok-rich-text-react-renderer';

export const GenericContent = ({ blok }: any) => {
  return (
    <section
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="font-kumbhSans relative flex h-screen w-full items-center justify-center bg-[url('/assets/bg-generic.svg')] p-16 text-justify leading-relaxed text-cpDark">
      <div className="min-h-80 w-2/3 min-w-96 rounded-2xl bg-white p-12">
        <h1 className="pb-8 text-center font-qtBasker text-4xl">{blok.title}</h1>
        <div className="h-[55vh] max-h-[2/3] min-h-96 overflow-y-auto px-4 text-justify">
          {render(blok.description, {
            nodeResolvers: {
              [NODE_HEADING]: (children) => <h2 className="font-qtBasker text-2xl">{children}</h2>,
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
    </section>
  );
};
