import {useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./About.scss";

const About = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],

    
  });

  return (
    <section className="about-section">
      <motion.div
        className="section-header"
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 >About</h2>
      </motion.div>
      <motion.p
        className="summary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am a passionate Full Stack Developer with a focus on MERN technologies (MongoDB, Express.js, React.js, Node.js). 
        I have a solid foundation in Java and DSA, which has been applied to real-world projects. My portfolio showcases 
        dynamic web applications, including user-friendly interfaces and backend solutions.
      </motion.p>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Education & Training</h2>
      </motion.div>
      <motion.p
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Completed comprehensive web development education, mastering key technologies like HTML, CSS, JavaScript, and the 
        MERN stack. Engaged in hands-on training through internships, applying these skills to real-world scenarios.
      </motion.p>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Skill & Expertise</h2>
      </motion.div>
      <motion.p
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Proficient in web development, with expertise in HTML, CSS, JavaScript, and the MERN stack. Adept at creating 
        dynamic, user-friendly interfaces and implementing backend functionalities.
      </motion.p>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Professional Experience</h2>
      </motion.div>
      <motion.p
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Developed projects like a Pinterest clone using the MERN stack and a Work Studio project with React.js. 
        Completed internships at CodSoft, where I worked on web development projects with HTML, CSS, and JavaScript.
      </motion.p>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Achievements & Awards</h2>
      </motion.div>
      <motion.p
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Earned certifications in Java and JavaScript from HackerRank, CodeChef, and CodSoft. 
        Received a C++ certification from SkillUp and numerous other achievements in various technologies.
      </motion.p>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Mission Statement</h2>
      </motion.div>
      <motion.p
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        My mission is to excel in Java programming and to develop robust data structures and algorithms. 
        I aim to build efficient, scalable, and high-performance solutions for complex problems.
      </motion.p>
    </section>
  );
};

export default About;