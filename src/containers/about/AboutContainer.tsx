import { motion } from "framer-motion";
import profile from "../../assets/images/samuel_morse.webp";
import profile2 from "../../assets/images/samuel_morse2.webp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutContainer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <div className="about_box">
        <h1>
          <span>._ _. </span>Samuel Morse<span> ._ _.</span>
        </h1>

        <p>
          <figure>
            <img src={profile} alt="profile" loading="lazy" />
          </figure>
          {t("about.about_samuel_morse")}
          <figure>
            <img src={profile2} alt="profile" loading="lazy" />
          </figure>
          {t("about.about_samuel_morse2")}
        </p>

        <button onClick={() => navigate("/")}>{t("about.go_home")}</button>
      </div>
    </motion.section>
  );
};

export default AboutContainer;
