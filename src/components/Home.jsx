import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import HeroImage from "../assets/kuralarasan.png";

const Home = () => {
  return (
    <Element name="home" className="home-section">
      <div className="home-container">

        {/* Left Text */}
        <motion.div
          className="home-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="hello-text"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            HELLO!
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I'm <span>Kuralarasan</span>
          </motion.h1>

          <motion.h2
            className="subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            React JS Developer
          </motion.h2>

          <motion.div
            className="home-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#contact" className="btn btn-primary">HIRE ME</a>
            <a href="#projects" className="btn btn-outline">MY WORKS</a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="home-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={HeroImage}
            alt="Kuralarasan"
            className="hero-image"
            // animate={{ y: [0, -10, 0] }}
            // transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </Element>
  );
};

export default Home;
