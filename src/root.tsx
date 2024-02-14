import { storyblokInit, apiPlugin } from '@storyblok/react';
import { json, V2_MetaFunction, LoaderFunction, LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';

import { fallbackLng, supportedLngs, Locales } from '~/config/locales/i18n';
import { i18next, getUUID } from '~/services';

import { templates } from './components/templates';
import { sections } from './components/sections';
import { elements } from './components/elements';

import { ErrorHandler } from './components/templates/ErrorHandler';

import stylesheet from '~/styles/tailwind.css';

export const meta: V2_MetaFunction = () => [{ charSet: 'utf-8' }];
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

storyblokInit({
  accessToken: 'Ga104k71w9GKLny2AArCOgtt',
  use: [apiPlugin],
  components: { ...sections, ...templates, ...elements },
});

export const loader: LoaderFunction = async ({ request }) => {
  const lang = (await i18next.getLocale(request)) as Locales;
  const requestLocale = request.url.split(/\/|\?/g).splice(3)[0] as Locales;
  const locale = supportedLngs.includes(requestLocale) ? requestLocale : lang || fallbackLng;
  const nonce = `nonce-${getUUID()}`;

  return json({ locale, nonce });
};

const Root = () => {
  const { locale, nonce } = useLoaderData<{ locale: Locales; nonce: string }>();

  return (
    <html lang={locale}>
      <head>
        <Meta />
        <Links />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          httpEquiv="Content-Security-Policy"
          content={`script-src 'nonce-${nonce}' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'; base-uri 'self'; object-src 'none';`}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration nonce={nonce} />
        <LiveReload nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
};

export const ErrorBoundary = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body>
        <ErrorHandler />
        <Scripts />
      </body>
    </html>
  );
};

export default Root;
