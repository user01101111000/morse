import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";
import { ILanguage } from "../../../types/components/MorseCodeTranlator";
import az_flag from "../../../assets/icons/az.webp";
import us_flag from "../../../assets/icons/us.webp";
import tr_flag from "../../../assets/icons/tr.webp";

const LanguageBox = () => {
  const langs: ILanguage = { en: "en", az: "az", tr: "tr" };
  const { i18n } = useTranslation();

  const current_language = langs[i18n.language] || "en";

  return (
    <div className="languages_boxes">
      <button
        className={`language_button${
          current_language === "en" ? " active" : ""
        }`}
        type="button"
        onClick={() => i18n.changeLanguage("en")}
        data-tooltip-id="en"
        data-tooltip-content="English"
      >
        <figure>
          <img src={us_flag} alt="us" loading="lazy" />
        </figure>
      </button>
      <button
        className={`language_button${
          current_language === "az" ? " active" : ""
        }`}
        type="button"
        onClick={() => i18n.changeLanguage("az")}
        data-tooltip-id="az"
        data-tooltip-content="Azerbaijani"
      >
        <figure>
          <img src={az_flag} alt="az" loading="lazy" />
        </figure>
      </button>

      <button
        className={`language_button${
          current_language === "tr" ? " active" : ""
        }`}
        type="button"
        onClick={() => i18n.changeLanguage("tr")}
        data-tooltip-id="tr"
        data-tooltip-content="Turkish"
      >
        <figure>
          <img src={tr_flag} alt="tr" loading="lazy" />
        </figure>
      </button>

      <Tooltip id="tr" />
      <Tooltip id="en" />
      <Tooltip id="az" />
    </div>
  );
};

export default LanguageBox;
