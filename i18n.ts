import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NAMESPACE } from './src/utils/Const';
import { getLocale } from './src/asyncStorage';

const faRes = require('./src/assets/lang/faRes.json');
const enRes = require('./src/assets/lang/enRes.json');

getLocale().then(value => {
  i18n.use(initReactI18next).init({
    resources: {
      fa: { translation: faRes },
      en: { translation: enRes }
    },
    lng: value,
    fallbackLng: 'en',
    ns: [NAMESPACE],

    interpolation: {
      escapeValue: false
    }
  });
});

export default i18n;
