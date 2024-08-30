import {useRef }from "react";
import { motion, useInView} from "framer-motion";
import "./skill.scss";



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
const skillsData = [
  { title: "HTML", description: "Proficient in creating structured web content.", icon: "html.png" },
  { title: "CSS", description: "Expert in crafting responsive and visually appealing designs.", icon: "css.png"},
  { title: "JavaScript", description: "Skilled in adding interactivity and complex logic to web pages.", icon: "javascript.png"},
  { title: "JAVA", description: "Proficient in Java, with expertise in object-oriented programming, core concepts, and multi-threading.", icon:"java.png" },
  
  { title: "DSA", description: "Proficient in Data Structures and Algorithms for efficient problem-solving."},
  { title: "OOPs", description: "Strong understanding of Object-Oriented Programming principles." },
  { title: "MongoDB", description: "Proficient in using MongoDB for NoSQL database management, including data modeling and querying.", icon:"MongoDB.png"},
  { title: "Express.js", description: "Adept at creating robust web applications with Express.js, focusing on routing and middleware management.", icon:"express.png" },
  { title: "React.js", description: " Skilled in building dynamic user interfaces with React.js, focusing on component-based architecture and state management.",icon:"reactjs.png" },
  { title: "Node.js", description: " Experienced in server-side development with Node.js, including RESTful API creation and asynchronous programming.",icon:"nodejs.png" },
];

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div className="services"
    variants={variants}
    initial="initial"
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={"animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
    
          <h1>
            <motion.b whileHover={{color:"orange"}}> Some  </motion.b>  of the  
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}> Technologies</motion.b>  I excel at:
          </h1>
          <button>MY SKILLS</button>
        </div>
      </motion.div>
    <section className="skills-section">
    
      
     
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div 
            className="skill-box"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}

          >
            

            {skill.icon && <img src={skill.icon} alt={ `${skill.title} icon` } className="skill-icon "/>}
            <h3>{skill.title}</h3>
           
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </motion.div>
  );
};

export default Skills;