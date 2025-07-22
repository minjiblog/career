import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import jaCommon from '../public/locales/ja/common.json';
import enCommon from '../public/locales/en/common.json';

// prevent re-init in HMR
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        ja: { common: jaCommon },
        en: { common: enCommon },
      },
      lng: 'ja',
      fallbackLng: 'ja',
      ns: ['common'],
      defaultNS: 'common',
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export default i18n;
