import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundContainer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="not_found"
    >
      <h1>{t("not_found.title")}</h1>
      <button onClick={() => navigate("/")}>{t("not_found.go_home")}</button>
    </motion.section>
  );
};

export default NotFoundContainer;
