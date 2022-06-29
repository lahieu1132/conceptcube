import i18n from "i18next";
import { initReactI18next } from "react-i18next";



i18n
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "address":
            "17-10, Dosan-daero 8-gil, Gangnam-gu, Republic of Korea 1F",
            "page 3 item": "We understand the society needs their own label/keyword of the culture to share their communication. This has become part of their strength in their lives. Moreover, we realized connect people with cu",
            "page 4 item": "LG Display Shocase Video Production"
        }
      },
      kr: {
        translations: {
          "address":
            "서울특별시 강남구 도산대로 8길 17-10 이리스빌딩 1F",
            "page 3 item": "다양한 사람들이 각자 원하는 문화라는 키워드로 소통하고 나누며 참여하는 것이 얼마나 큰 힘이 되는지, 사람을 이어주는 문화사업이 얼마나 많은 행복을 주는지 알고 있습니다. Concept cube는 뮤직, 세미나 등 다양한 문화 행사를 만들고 함께 나누려 노력합니다.",
            "page 4 item": "실무중심의 교육기관 '루크 아카데미' 설립"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;