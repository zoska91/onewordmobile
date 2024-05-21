import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import { en } from './en';
import { pl } from './pl';

const resources = {
  en: { translation: en },
  pl: { translation: pl },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    debug: true,
    lng: 'en', // Tę linię usuń, jeśli używasz detektora języka
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
