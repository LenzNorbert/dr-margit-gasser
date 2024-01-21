import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { LoaderFunction, json, redirect } from '@remix-run/node';
import { getStoryblokApi, useStoryblokState, StoryblokComponent } from '@storyblok/react';

import { i18next } from '~/services';
import { supportedLngs, Locales } from '~/config/locales/i18n';
import { Navbar } from '~/components/elements/Navbar';
import { MouseIndicator } from '~/components/elements/MouseIndicator';

export const loader: LoaderFunction = async ({ request, params }) => {
  const requestLocale = (params['*']?.split('/')[0] as Locales) || null;
  const locale = supportedLngs.includes(requestLocale) ? requestLocale : await i18next.getLocale(request);

  if (requestLocale === null) return redirect(`${await i18next.getLocale(request)}/`);
  if (!supportedLngs.includes(requestLocale)) return redirect(`/${locale}/error?code=404`);

  const { data } = await getStoryblokApi().get(`cdn/stories/${params['*']}`, { version: 'draft', cv: Date.now() });

  return json({ data: data?.story });
};

const Template = () => {
  const { data } = useLoaderData();
  const story = useStoryblokState(data);
  const [allowScroll, setAllowScroll] = useState(true);

  const temp = (story?.content || { body: [] as Array<any> })?.body.map(({ _uid }) => {
    return { name: '', id: _uid };
  });
  console.log(temp);

  return (
    <div
      className={`relative min-h-full w-full overflow-hidden bg-white ${
        !allowScroll && 'max-h-screen overflow-y-hidden'
      }`}>
      <MouseIndicator />
      <Navbar
        menuItems={[
          { name: 'Über mich', id: 'about' },
          { name: 'Wann hilft TCM', id: '' },
          { name: 'Methoden der TCM', id: '' },
          { name: 'Ordination', id: '' },
          { name: 'Kontakt', id: '' },
        ]}
        onClick={() => setAllowScroll(!allowScroll)}
      />
      <div className="relative flex items-center justify-center xl:pt-20">
        <StoryblokComponent blok={story?.content} key={story?.name} />
      </div>
    </div>
  );
};

export default Template;
