import { motion } from "framer-motion";

const AboutContainer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      About
    </motion.section>
  );
};

export default AboutContainer;
