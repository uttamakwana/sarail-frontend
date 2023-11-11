// importing loading.css
import "./loading.css";
// importing motion for loading animation
import { motion } from "framer-motion";

const Loading = ({ loading }) => {
  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <section className="loading flex-center">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
      >
        <motion.div
          className="circle flex-center"
          initial={{
            x: -1500,
            y: 0,
            scale: -1,
            opacity: 0,
            rotate: -180,
            borderRadius: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            rotate: 0,
            borderRadius: "50%",
          }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <motion.span
            initial={{ x: -10, y: -1500, scale: -1, opacity: 0 }}
            animate={{ x: -10, y: 0, scale: 1, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2, delay: 1 }}
          ></motion.span>
          <motion.span
            initial={{ x: 10, y: -1500, scale: -1, opacity: 0 }}
            animate={{ x: 10, y: 0, scale: 1, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2, delay: 1.2 }}
          ></motion.span>
          <motion.span
            initial={{ x: -1500, y: 0, scale: -1, opacity: 0 }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2, delay: 1.4 }}
          ></motion.span>
          <motion.span
            initial={{ x: -1500, y: 0, scale: -1, opacity: 0 }}
            animate={{ x: -30, y: 20, scale: 1, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2, delay: 1.6 }}
          ></motion.span>
          <motion.span
            initial={{ x: -1500, y: 0, scale: -1, opacity: 0 }}
            animate={{ x: -30, y: -20, scale: 1, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2, delay: 1.8 }}
          ></motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Loading;
