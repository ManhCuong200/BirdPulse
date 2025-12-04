import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enJSON from '../locales/en.json';
import viJSON from '../locales/vi.json';
import jpJSON from '../locales/jp.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enJSON },
            vi: { translation: viJSON },
            jp: { translation: jpJSON },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
