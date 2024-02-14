import { InitOptions } from 'i18next';

export enum Locales {
  DE = 'de',
}

export const supportedLngs: Locales[] = [Locales.DE];
export const fallbackLng: Locales = Locales.DE;

export const i18nConfig: InitOptions = {
  supportedLngs,
  fallbackLng,
  compatibilityJSON: 'v4',
  react: { useSuspense: false },
};
