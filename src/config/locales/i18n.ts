import { InitOptions } from 'i18next';

export enum Locales {
  DE = 'de',
  EN = 'en',
}

export const supportedLngs: Locales[] = [Locales.EN, Locales.DE];
export const fallbackLng: Locales = Locales.EN;

export const i18nConfig: InitOptions = {
  supportedLngs,
  fallbackLng,
  defaultNS: 'common',
  compatibilityJSON: 'v4',
  react: { useSuspense: false },
};
