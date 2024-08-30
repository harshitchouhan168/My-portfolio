import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HARSHIT CHOUHAN </motion.h2>
          <motion.h1 variants={textVariants}>
            Hello I am a Web developer and Programmer!
          </motion.h1>
          <motion.h3 variants={textVariants}>
          Proficient in Java and the MERN stack (MongoDB, Express.js, React.js, Node.js), I specialize in developing dynamic web applications and robust backend systems. With a strong focus on performance, security, and scalability, I am dedicated to delivering high-quality software solutions that meet and exceed client expectations.



          </motion.h3>
          
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        MernStack Developer
      </motion.div>
      <div className="imageContainer">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
