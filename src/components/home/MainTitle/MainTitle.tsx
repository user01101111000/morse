import { Trans, useTranslation } from "react-i18next";

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
                href="https://www.britannica.com/topic/Morse-Code"
              />
            ),
          }}
        />
      </h1>

      <div className="about_variables">
        <p>fr : {t("home.fr")}</p>
        <p>sp : {t("home.sp")}</p>
      </div>
    </div>
  );
};

export default MainTitle;
