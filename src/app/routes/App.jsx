import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/app.scss";
import {
  AboutDistrict,
  AdministrationPage,
  AiylAimaksPage,
  AntiCorruptionPage,
  GalleryPage,
  HomePage,
  NewsDetail,
  NewsPage,
  ProjectsPage,
} from "../../pages";
import { Footer, Header } from "../../widgets";
import { ScrollButton } from "../../entities";
import { useDispatch, useSelector } from "react-redux";
import { useVisually } from "../store/reducers/visually";
import { useEffect } from "react";
import i18n from "../../i18n/i18n";
import { fetchSettings } from "../store/reducers/settingsSlice";

function App() {
  const routesArr = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/gallery/:id",
      element: <GalleryPage />,
    },
    {
      path: "/administration/:id",
      element: <AdministrationPage />,
    },
    {
      path: "/news",
      element: <NewsPage />,
    },
    {
      path: "/news-detail/:id",
      element: <NewsDetail />,
    },
    {
      path: "/about-district/:id",
      element: <AboutDistrict />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
    {
      path: "/anti-corruption",
      element: <AntiCorruptionPage />,
    },
    {
      path: "/aiyl-aimaks",
      element: <AiylAimaksPage />,
    },
  ];

  const dispatch = useDispatch();
  const { font, theme, letterSpacing, lineSpacing, fontSize, picture } = useVisually();
  
  useEffect(() => {
    const body = document.body;
    if (!body) return;

    const themeClasses = ["dark", "light", "brown", "green", "blue"];
    const letterSpacingClasses = [
      "letter__normal",
      "letter__average",
      "letter__big",
    ];
    const lineHeightClasses = ["lineH__normal", "lineH__normal", "lineH__big"];
    const fontsClasses = ["serif", "sans-serif"];
    const fontSizeClasses = [
      "fontSize-2",
      "fontSize-4",
      "fontSize-6",
      "fontSize-8",
      "fontSize-10",
      "fontSize-12",
      "fontSize-14",
      "fontSize-16",
      "fontSize-18",
      "fontSize-20",
      "fontSize-22",
      "fontSize-24",
      "fontSize-26",
    ];
    const imagesClass = ["image__show", "image__hide", "image__dark"];


    body.classList.remove(
      ...themeClasses,
      ...letterSpacingClasses,
      ...lineHeightClasses,
      ...fontsClasses,
      ...fontSizeClasses,
      ...imagesClass
    );
    body.classList.add(
      theme,
      letterSpacing,
      lineSpacing,
      font,
      `fontSize-${fontSize}`,
      picture
    );

    return () => {
      body.classList.remove(
        theme,
        letterSpacing,
        lineSpacing,
        font,
        `fontSize-${fontSize}`,
        picture
      );
    };
  }, [theme, letterSpacing, lineSpacing, font, fontSize, picture]);

  // Синтез речи
  const { speech } = useSelector((state) => state.visually);    

  const readPageContent = () => {
    const content = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = "ru-RU";
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
    if (speech) {
      readPageContent();
    } else {
      stopSpeech();
    }
  }, [speech]);
  //

  const { setting } = useSelector((state) => state.setting);

  const getGlobalSettings = () => {
    dispatch(fetchSettings());
  };

  useEffect(() => {
    const updateGlobalSettings = async () => {
      if (setting && setting.length > 0) {
        const set = setting[0]; // Берем первый элемент массива setting
        document.title = set.title_logo; // Обновляем title

        const favicon = document.getElementById('favicon');
        if (favicon && set.logo) { // Используем set.logo, если оно существует
          favicon.href = set.logo; // Обновляем favicon
        }
      }
    };

    // Вызываем функцию для обновления настроек
    updateGlobalSettings();

    // Подписываемся на событие смены языка
    i18n.on('languageChanged', updateGlobalSettings);

    // Отписываемся от события при размонтировании компонента
    return () => {
      i18n.off('languageChanged', updateGlobalSettings);
    };
  }, [setting]); // Добавляем setting в зависимости, чтобы обновлять настройки при его изменении


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        {routesArr?.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
