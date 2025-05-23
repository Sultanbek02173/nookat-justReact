import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from "./locales/ru/ru.json"
import ky from "./locales/kg/kg.json"

i18n.use(initReactI18next).init({
     resources: {
        ru: {
            translation: ru 
        },
       
        ky: {
            translation: ky
        }
     },
    language:"ky",
    fallbackLng:"ky",
    interpolation: {
        escapeValue: false
    }
})

export default i18n;
