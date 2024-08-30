import Test from "./Test";
import "./app.scss";

import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import About from "./components/about/about";
import Navbar from "./components/navbar/Navbar";

import Parallax from "./components/parallax/Parallax";
import Skill from "./components/skills/Skill";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";






const App = () => {
  return <div>
    <Cursor/>
    <section id = "Homepage">
     <Navbar />
      <Hero />
    </section>


      
      
      <section id = "About" >
    <About/>
  

     

     </section>
     

     <section id = "Skills">
    <Skill/>
     </section>
       
    <section id = "Portfolio"> 
     <Parallax />
    </section>
     
    <Portfolio/>
    
    <section id = "contact">
    <Contact/>
     </section>
    
   



  </div>;
  
};

export default App;
