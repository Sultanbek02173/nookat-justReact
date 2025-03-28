import { useEffect, useState } from "react";
import "../header.scss";
import "../burgermenu.scss";
import { useTranslation } from 'react-i18next';
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaPhoneAlt, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { activeMode, deactivateMode, useVisually } from "../../../app/store/reducers/visually";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";


const BurgerMenu = ({mainTextSpeech}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { active } = useVisually();
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  const handleChangeLang = ({ target: { value } }) => {
    i18n.changeLanguage(value);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { setting } = useSelector((state) => state.setting);


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);
  return (
    <div className="burger-menu">
      <input
        id="menu__toggle"
        type="checkbox"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={`menu__box ${isOpen ? 'open' : ''}`}>
        <div className="">
          <div className="contact_info">
            <div>
              <a href={setting ? setting[0]?.location : ''} target="_blank"><FaLocationDot size={25} /></a>
              <a href={setting ? setting[0]?.location : ''} target="_blank"><p>ул. Центральная, 45, г. Ноокат</p></a>
            </div>
            <div>
              <FaPhoneAlt />
              <a href={`tel:${setting ? setting[0]?.phone : ''}`} target="_blank">
                <p>{setting ? setting[0]?.phone : ''}</p>
              </a>
            </div>
            <div> 
              <MdLanguage size={25} />
              
              <button onClick={() => handleChangeLang({ target: { value: 'ru' } })}>RU</button>
              <span>/</span>
              <button onClick={() => handleChangeLang({ target: { value: 'kg' } })}>KG</button>
              <span>/</span>
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

            <div className="socials">
              <a href={setting ? setting[0]?.link_insta : ''} target="_blank"><div>
                <FaInstagram />
                
              </div></a>
              <div>
                <a href={setting ? setting[0]?.link_telegram : ''} target="_blank"><FaTelegramPlane /></a>
              </div>
              <div>
                <a href={`https://wa.me/${setting ? setting[0]?.link_watapp : ''}`} target="_blank"> <IoLogoWhatsapp /></a>
              </div>
              <div>
                <a href={setting ? setting[0]?.link_youtube : ''} target="_blank"> <FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      </ul>

    </div>
  );
};

export default BurgerMenu;

