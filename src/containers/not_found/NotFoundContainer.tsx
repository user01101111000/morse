import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="not_found"
    >
      <h1>Page Not Found !</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </motion.section>
  );
};

export default NotFoundContainer;
