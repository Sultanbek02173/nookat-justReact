import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchDistricts } from "../../../app/store/reducers/districts";
import i18n from "../../../i18n/i18n";
import { scrollToTop } from "../../../shared";



const HeaderMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { district } = useSelector((state) => state.district);

  const headerMenu = [
    { name: "ГЛАВНАЯ", path: "/" },
    {
      name: "О РАЙОНЕ",
      path: `/about-district/${district ? district[0]?.id : ''}`,
      subMenu: [],
    },
    {
      name: "АДМИНИСТРАЦИЯ",
      path: `/administration/1`,
      subMenu: [
        { name: "руководители", path: "/administration/1" },
        { name: "структура администрации", path: "/administration/2" },
        { name: "вакансии", path: "/administration/3" },
        { name: "График приема граждан", path: "/administration/4" },
      ],
    },
    { name: "НОВОСТИ", path: "/news" },
    {
      name: "ОБРАЩЕНИЯ ГРАЖДАН",
      path: "https://portal.tunduk.kg/public_services/new_message_sed",
      target: "_blank",
    },
    { name: "ПРОЕКТЫ", path: "/projects" },
    { name: "АНТИКОРРУПЦИОННЫЕ МЕРОПРИЯТИЯ", path: "/anti-corruption" },
    { name: "ГАЛЕРЕЯ", path: "/gallery/new-photo" },
  ];

  const fetchDistrict = () => {
    dispatch(fetchDistricts());
  };

  useEffect(() => {
    fetchDistrict();

    i18n.on("languageChanged", fetchDistrict);
    return () => {
      i18n.off("languageChanged", fetchDistrict);
    };
  }, [dispatch]);

  const dynamicHeaderMenu = headerMenu.map((item) => {
    if (item.name === "О РАЙОНЕ") {
      const staticSubMenu = [{ name: "Айылные аймаки", path: "/aiyl-aimaks" }];

      const dynamicSubMenu = district.map((d) => ({
        name: d.title,
        path: `/about-district/${d.id}`,
      }));

      return {
        ...item,
        subMenu: [...dynamicSubMenu, ...staticSubMenu],
      };
    }
    return item;
  });

  const handleMouseEnter = (name) => {
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header_menu" ref={menuRef}>
      {dynamicHeaderMenu.map((page) => (
        <div
          onClick={scrollToTop}
          key={page.name}
          className="menu_item"
          onMouseEnter={() => page.subMenu && handleMouseEnter(page.name)}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink className="link" to={page.path} target={page?.target}>
            <button>{t(page.name)}</button>
          </NavLink>
          {page.subMenu && activeMenu === page.name && (
            <div className="dropdown_menu">
              {page.subMenu.map((subPage) => (
                <NavLink
                  key={subPage.name}
                  to={subPage.path}
                  className="dropdown_link"
                >
                  {t(subPage.name)}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;
