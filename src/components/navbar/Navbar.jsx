import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";




const sliderVariants = {
  initial: {
    x: 10,
  },
  animate: {
    x: "700%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 30,
    },
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          
          
          transition={{ duration: 10 }}
          
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
      
           Available On 
        </motion.span>

        <div className="social"> 
          <div className="icon-container">
          <a href="#">
            <motion.div
            whileHover= {{ scale: 1.2}}
            className="icon-wrapper">
            
                <img src="/github.png" alt="Github"  className="icon" />
                <span className="tooltip">Github</span>
            </motion.div>
          </a>
          </div>


          <div className="icon-container">
          <a href="#">
            <motion.div
            whileHover={{scale:1.2}}
            className="icon-wrapper">
          <img
              src="/linkedin.png"
              alt="LinkedIn"
              whileHover={{ scale: 1.2 }}
              className="icon"
            />
            <span
              className="tooltip"
             
            >
              LinkedIn
            </span>
            </motion.div>
            </a>
          </div>


          <div className="icon-container" tabIndex="0">
          <a href="#">
            <motion.div 
             whileHover={{scale:1.2}}
            className="icon-wrapper">
          <img
              src="/instagram.png"
              alt="Instagram"
              whileHover={{ scale: 1.2 }}
              className="icon"
           />
            <span
              className="tooltip"
             
            >
              Instagram
            </span>
            </motion.div>
          </a>
          </div>
         

          <div className="icon-container" tabIndex="0">
          <a href="#">
             <motion.div  whileHover={{scale:1.2}}
            className="icon-wrapper">
             <img src="/facebook.png" alt="Facebook"  whileHover={{scale:1.2}} className="icon"/>
             <span
              className="tooltip">
              
              Facebook
            </span>
            </motion.div>
          </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
