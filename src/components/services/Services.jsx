import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={/*isInView &&*/ "animate"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>WebDev</motion.b> Skills.
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Project using</motion.b>{" "}
            Different TeckStack.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HTML / CSS </h2>
          <p>
            This section features a collection of simple and basic projects that
            incorporate HTML, CSS, and SASS. These projects serve as
            foundational examples, demonstrating how these three core
            technologies work together to create dynamic and interactive web
            experiences.
          </p>
          <button>
            <a href="https://html-css-sass-projects-netlify.netlify.app/">
              Projects
            </a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>JAVASCRIPT</h2>
          <p>
            Explore our JavaScript project section, where innovation meets
            functionality. Discover a diverse range of projects showcasing the
            power of JavaScript in creating interactive web applications.
          </p>
          <button>
            <a href="https://javascript-projects-netlify.netlify.app/">
              Projects
            </a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>REACT JS</h2>
          <p>
            Dive into our React project section and experience the power of
            component-based architecture. Discover a variety of projects that
            harness React's declarative syntax and efficient rendering , using
            Redux or Context API
          </p>
          <button>
            <a href="https://react-projects-netlify.netlify.app/">Projects</a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>NODE / EXPRESS</h2>
          <p>
            Explore our backend project section, where server-side technologies
            transform concepts into robust applications. Dive into projects
            showcasing the power of backend frameworks like Node.js and
            Express.js .
          </p>
          <button>
            <a href="https://backened-projects.netlify.app/">Projects</a>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
