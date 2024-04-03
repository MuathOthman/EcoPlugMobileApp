import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import ar from './Locales/ar.json';
import en from './Locales/en.json';
import fi from './Locales/fi.json';

const defaultLocale = getLocales()[0].languageCode; // Get device locale

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ar: { translation: ar },
            en: { translation: en },
            fi: { translation: fi },
        },
        lng: defaultLocale,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true,
        },
    });

console.log('Default locale:', defaultLocale);

export default i18n;
