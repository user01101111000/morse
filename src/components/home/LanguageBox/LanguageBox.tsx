import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";

const LanguageBox = () => {
  const { i18n } = useTranslation();

  return (
    <div className="languages_boxes">
      <button
        className={`language_button${i18n.language === "en" ? " active" : ""}`}
        type="button"
        onClick={() => i18n.changeLanguage("en")}
        data-tooltip-id="en"
        data-tooltip-content="English"
      >
        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="us"
          />
        </figure>
      </button>
      <button
        className={`language_button${i18n.language === "az" ? " active" : ""}`}
        type="button"
        onClick={() => i18n.changeLanguage("az")}
        data-tooltip-id="az"
        data-tooltip-content="Azerbaijani"
      >
        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"
            alt="az"
          />
        </figure>
      </button>

      <button
        className={`language_button${i18n.language === "tr" ? " active" : ""}`}
        type="button"
        onClick={() => i18n.changeLanguage("tr")}
        data-tooltip-id="tr"
        data-tooltip-content="Turkish"
      >
        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png"
            alt="tr"
          />
        </figure>
      </button>

      <Tooltip id="tr" />
      <Tooltip id="en" />
      <Tooltip id="az" />
    </div>
  );
};

export default LanguageBox;
