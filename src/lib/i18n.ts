// src/lib/i18n.js
'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../app/locales/en/translation.json';
import frTranslations from '../app/locales/fr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
    },
    lng:  'fr', // Set default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
