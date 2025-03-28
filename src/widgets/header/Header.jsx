import "./header.scss";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";
import { VisuallyImpaired } from "../../entities/VisuallyImpaired/VisuallyImpaired";
import { useVisually } from "../../app/store/reducers/visually";

export const Header = () => {
  const { active } = useVisually();

  const mainTextSpeech = (text) => {
        const talk = new SpeechSynthesisUtterance();
        talk.lang = 'ru-RU';
        talk.text = text;
        window.speechSynthesis.speak(talk);
    };

  return (
    <header className="header">
      <div className="container">
        <HeaderTop mainTextSpeech={mainTextSpeech}/>
        {active && <VisuallyImpaired mainTextSpeech={mainTextSpeech} />}
        <HeaderBottom />
      </div>
    </header>
  );
};
