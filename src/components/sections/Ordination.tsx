import { storyblokEditable } from '@storyblok/react';

export const Ordination = ({ blok }: any) => {
  return (
    <>
      <img src="/assets/wave-4.svg" className="relative -bottom-1 z-10 w-full" />
      <div
        {...storyblokEditable(blok)}
        key={blok?._uid}
        id={blok?._uid}
        className="relative flex h-fit min-h-screen w-full flex-col items-center justify-evenly bg-cpBeige py-4">
        <h3 className="text-center font-poppins text-2xl font-bold text-cpText md:text-4xl lg:text-5xl">{blok.title}</h3>
        <div className="flex h-2/3 min-h-60 w-3/4 flex-col items-center justify-evenly rounded-2xl bg-white">
          {blok?.ordination_content.map(({ title, icon, text, _uid }: { [key: string]: any }) => (
            <div className="flex h-fit flex-col items-center justify-evenly px-12 py-8 [&>*]:my-2" key={_uid}>
              <div className="aspect-square w-16  rounded-2xl bg-cpRed bg-opacity-30 p-3">
                <img src={icon.filename} className="aspect-square w-full" />
              </div>
              <h4 className="text-center font-poppins text-xl font-semibold text-cpText">{title}</h4>
              <p className="w-full whitespace-pre-wrap text-center font-mulish text-lg text-cpText [text-align-last:center] md:text-justify">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
