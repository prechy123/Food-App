import FooterLayout from "../layouts/FooterLayout";
import { motion } from "framer-motion";

const sectionVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const sideVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export default function HomePage() {
  return (
    <>
      <motion.section
        id="home"
        variants={sectionVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="l-side"
          variants={sideVariants}
          exit={{ x: "-100vw", ease: "easeInOut" }}
        >
          <h1>
            <span>Welcome to </span>Culinary App
          </h1>
          <p>
            Experience a culinary adventure like no other with the Meal App,
            offering an exclusive collection of top-notch recipes sourced from
            diverse corners of the world. Elevate your cooking endeavors by
            accessing a wide array of high-quality recipes, thoughtfully curated
            to represent global flavors and gastronomic delights.
          </p>
        </motion.div>
        <motion.div
          className="r-side"
          variants={sideVariants}
          exit={{ x: "-100vw", ease: "easeInOut" }}
        >
          <div className="grid-container">
            <div className="grid-item-1"></div>
            <div className="grid-item-2"></div>
            <div className="grid-item-3"></div>
            <div className="grid-item-4"></div>
            <div className="grid-item-5"></div>
            <div className="grid-item-6"></div>
            <div className="grid-item-7"></div>
            <div className="grid-item-7"></div>
          </div>
        </motion.div>
      </motion.section>
      <FooterLayout />
    </>
  );
}
