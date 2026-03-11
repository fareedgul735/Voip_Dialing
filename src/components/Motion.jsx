import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Motion = ({ children, reverse }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-25%" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      ref={ref}
      className={`
        Animate${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Motion;
