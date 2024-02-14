import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { LinksFunction, LoaderFunction, V2_MetaFunction, json, redirect } from '@remix-run/node';
import { getStoryblokApi, useStoryblokState, StoryblokComponent } from '@storyblok/react';

import { MouseIndicator } from '~/components/elements/MouseIndicator';
import { supportedLngs, Locales } from '~/config/locales/i18n';
import { Navbar } from '~/components/elements/Navbar';
import { i18next } from '~/services';

export const loader: LoaderFunction = async ({ request, params }) => {
  const requestLocale = (params['*']?.split('/')[0] as Locales) || null;
  const locale = supportedLngs.includes(requestLocale) ? requestLocale : await i18next.getLocale(request);

  if (requestLocale === null) return redirect(`${await i18next.getLocale(request)}/`);
  if (!supportedLngs.includes(requestLocale)) return redirect(`/${locale}/error?code=404`);

  const { data } = await getStoryblokApi().get(`cdn/stories/${params['*']}`, { version: 'published', cv: Date.now() });

  return json({ data: data?.story });
};

export const meta: V2_MetaFunction = ({ data }) => {
  const content = data.data.content;

  return [
    { title: content.title },
    {
      name: 'description',
      content: content.description,
    },
    {
      name: 'keywords',
      content: `${content.title}, TCM Vorarlberg, Chinesische Medizin, Akupunktur, Vorarlberg, Ordination Gasser`,
    },
  ];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/assets/logo.svg',
      type: 'image/svg',
    },
  ];
};

const Template = () => {
  const { data } = useLoaderData();
  const story = useStoryblokState(data);
  const [allowScroll, setAllowScroll] = useState(true);

  const menuHeadline = (story?.content || { title: '' })?.title;
  const menuItems = (story?.content || { body: [] as Array<any> })?.body
    .filter(({ navbar_link_name }) => navbar_link_name)
    .map(({ _uid, navbar_link_name }) => {
      return { name: navbar_link_name, id: _uid };
    });

  return (
    <div className={`relative min-h-full w-full overflow-hidden bg-white ${!allowScroll && 'max-h-screen overflow-y-hidden'}`}>
      <MouseIndicator />
      <Navbar menuHeadline={menuHeadline} menuItems={menuItems} flipScrollmode={() => setAllowScroll(!allowScroll)} />
      <div className="relative flex items-center justify-center">
        <StoryblokComponent blok={story?.content} key={story?.name} />
      </div>
    </div>
  );
};

export default Template;
