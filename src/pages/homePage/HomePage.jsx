import {
  CompanyLinks,
  Gallery,
  LastNews,
  Supervisor,
  ViewSuggestions,
} from "../../widgets";
import "./homePage.scss";

export const HomePage = () => {

  

  return (
    <div>
      <Supervisor />
      <LastNews />
      <ViewSuggestions />
      <Gallery />
      <CompanyLinks />
    </div>
  );
};
