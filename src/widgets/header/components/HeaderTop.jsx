import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
import {
  activeMode,
  deactivateMode,
  useVisually,
} from "../../../app/store/reducers/visually";
import { useDispatch, useSelector } from "react-redux";
import { fetchSettings } from "../../../app/store/reducers/settingsSlice";

const HeaderTop = ({mainTextSpeech}) => {
  const dispatch = useDispatch();
  const { active } = useVisually();
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

  const { setting } = useSelector((state) => state.setting);

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  };

  const getGlobalSettings = () => {
    dispatch(fetchSettings());
  }

  useEffect(() => {
    getGlobalSettings();

    i18n.on('languageChanged', getGlobalSettings)
    return () => {
        i18n.off('languageChanged', getGlobalSettings);
    }
  }, [])  

  return (
    <div id="header" className="headerTop">
      <div className="headerTop_left">
        <img src={setting ? setting[0]?.logo : ''} alt="Logo" />
        <h1>{setting ? setting[0]?.title_logo : ''}</h1>
      </div>
      <BurgerMenu mainTextSpeech={mainTextSpeech} />
      <div className="headerTop_right">
        <a href={setting ? setting[0]?.location : ''} target="_blank"><FaLocationDot size={25} /></a>
        <a href={setting ? setting[0]?.location : ''} target="_blank"><p>{setting ? setting[0]?.location_name : ''}</p></a>

        <div>
          {!active ? (
            <button className="activeBtn" onClick={() => {
              dispatch(activeMode())
              mainTextSpeech('Режим для слабозрячих включен');
            }}><LiaEyeSolid size={20} /></button>
          ) : (
            <button className="activeBtn" onClick={() => {
              dispatch(deactivateMode());
              mainTextSpeech('Режим для слабозрячих выключен');
            }}>
              <LiaEyeSlashSolid />
            </button>
          )}
        </div>
        <MdLanguage size={25} />
        <div className="languageButtons">
          <button
            onClick={() => handleChangeLang("ru")}
            className={activeLang === "ru" ? "active" : ""}
          >
            RU
          </button>
          <span>/</span>
          <button
            onClick={() => handleChangeLang("ky")}
            className={activeLang === "ky" ? "active" : ""}
          >
            KG
          </button>
        </div>

        <FaPhoneAlt />
        <a href={`tel:${setting ? setting[0]?.phone : ''}`} target="_blank">
          <p>{setting ? setting[0]?.phone : ''}</p>
        </a>

        <div className="socials">
          {/* <a href={setting ? setting[0]?.link_insta : ''} target="_blank">
            <div>
              <FaInstagram />

            </div>
          </a> */}
          <a href={setting ? setting[0]?.link_facebook : ''} target="_blank">
            <div>
                <FaFacebookF />
            </div>
          </a>
          {/* <a href={`https://wa.me/${setting ? setting[0]?.link_watapp : ''}`} target="_blank">
            <div>
              <IoLogoWhatsapp />
            </div>
          </a>
          <a href={setting ? setting[0]?.link_youtube : ''} target="_blank">
            <div>
              <FaYoutube />
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
