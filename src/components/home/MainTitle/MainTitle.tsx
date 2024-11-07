import { Trans, useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const MainTitle = () => {
  const { t } = useTranslation();

  return (
    <div className="main_title">
      <h1>
        <Trans
          i18nKey="home.title"
          components={{
            1: (
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Morse_code"
              />
            ),
            2: (
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Samuel_Morse"
              />
            ),
            3: (
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Alfred_Vail"
              />
            ),
          }}
        />
      </h1>

      <div className="about_area">
        <div></div>
        <div className="about_variables">
          <p>fr : {t("home.fr")},</p>
          <p>sp : {t("home.sp")}</p>
        </div>

        <div className="social_icons">
          <a href="https://github.com/user01101111000/morse" target="_blank">
            <FaGithub
              data-tooltip-id="github"
              data-tooltip-content="Project source code"
              className="social_icon"
            />
          </a>
          <Tooltip id="github" />
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
