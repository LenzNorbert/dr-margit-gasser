import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoaderData } from '@remix-run/react';
import { LoaderFunction, json, redirect } from '@remix-run/node';
import { getStoryblokApi, useStoryblokState, StoryblokComponent } from '@storyblok/react';

import { i18next } from '~/services';
import { supportedLngs, Locales } from '~/config/locales/i18n';

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

  return (
    <div className="bg-dark relative min-h-full w-full overflow-hidden">
      {/* <BlurryBlob /> */}
      <div className="relative flex items-center justify-center">
        <StoryblokComponent blok={story?.content} key={story?.name} />
      </div>
    </div>
  );
};

export default Template;
