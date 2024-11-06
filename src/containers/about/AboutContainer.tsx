import { motion } from "framer-motion";
import profile from "../../assets/images/samuel_morse.webp";
import { useNavigate } from "react-router-dom";

const AboutContainer = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <div className="about_box">
        <figure>
          <img src={profile} alt="profile" />
        </figure>

        <h1>Samuel Morse</h1>

        <p>
          Samuel Morse (1791–1872) was an American inventor, painter, and
          co-developer of the Morse code, a breakthrough system for
          long-distance communication. Initially trained as a painter, Morse
          studied at Yale and showed a keen interest in both the arts and
          emerging science, particularly in electricity. He became a respected
          artist, known for his portraits, and traveled to Europe to refine his
          painting skills. However, his path took a dramatic turn in the 1830s,
          leading him to focus on telegraphy and communication technology.
        </p>

        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    </motion.section>
  );
};

export default AboutContainer;
