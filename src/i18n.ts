import { initReactI18next } from 'react-i18next';
import resources from './config/lang/resources';
import i18n from 'i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  });

export default i18n;
