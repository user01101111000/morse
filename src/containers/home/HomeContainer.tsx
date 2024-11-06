import MorseCodeTranlator from "../../components/home/MorseCodeTranlator/MorseCodeTranlator";
import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <MorseCodeTranlator />
    </motion.section>
  );
};

export default HomeContainer;
