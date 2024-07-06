import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PortFolio
        </motion.span>
        <div className="social">
          <a
            href="https://github.com/Neerajnsutian?tab=repositories"
            target="_blank"
          >
            <img src="./github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;