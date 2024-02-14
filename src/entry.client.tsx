import LanguageDetector from 'i18next-browser-languagedetector';
import Backend, { HttpBackendOptions } from 'i18next-http-backend';
import i18next from 'i18next';
import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';
import { getInitialNamespaces } from 'remix-i18next';

import { i18nConfig } from './config/locales/i18n';

i18next
  .use(LanguageDetector)
  .use(Backend)
  .init<HttpBackendOptions>({
    ...i18nConfig,
    ns: getInitialNamespaces(),
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['htmlTag'],
      caches: [],
    },
  })
  .then(() => {
    return hydrateRoot(document, <RemixBrowser />);
  });
