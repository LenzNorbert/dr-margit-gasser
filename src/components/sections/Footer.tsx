import { Link } from '@remix-run/react';
import { storyblokEditable } from '@storyblok/react';

export const Footer = ({ blok }: any) => {
  return (
    <footer
      {...storyblokEditable(blok)}
      key={blok?._uid}
      id={blok?._uid}
      className="relative flex h-32 w-full items-center justify-center bg-cpDark font-poppins text-sm text-white md:text-lg">
      <ul className="flex flex-col items-center justify-evenly md:flex-row md:border-white [&>li]:px-2 md:[&>li]:border-r-[1px]">
        <li>{blok.copyright}</li>
        {blok.links.map(({ name, link }: any, i: number) => (
          <li className={`${i === blok.links.length - 1 && 'border-none'}`}>
            <Link className="underline-offset-2 hover:underline" to={link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
