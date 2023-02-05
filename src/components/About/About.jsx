import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import crown from "../../img/crown.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './cv_finalized.pdf';

const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About</span>
        <span>Me!</span>
        <spane>
        You can find all my technical skills soft skills here 
          <br />
         you will find about some intersting stuff about me!
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>



      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Soft Skills"}
           
            detail={ <spane>
                 Trilingual:French,English,Arabic
                      <br />
                   Hard Working
                      <br/>
                    Critical Thinking
                      <br/> 
                    Team Player
                      <br/>
                    Great Communication
                      <br/>
                    Agile methodology/SCRUM
                      <br/>
                     </spane>                   
                      }
                    />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Technical Skills"}
            detail={ <spane>
          Ease with computer related programs (Such as Word, Excel, PowerPoint, MS Project, etc.)
                   <br />
                   Experience with programming languages such as Java, JavaScript, C#, PHP, Python, Swift
                   <br/>
                   Used a variety of frameworks such as HTML, Spring Boot, Azure ASP.Net, SwiftUI
                   <br/> 
                  High knowledge of Windows, some with Linux
                   <br/>
               Mobile development using Android and familiar with MacOS
                   <br/>
                 Experience with Data Management using MySQL, ORACLE, and MongoDB
                   <br/>
                   <br>
                   Knowledge of development software such as Jira and Figma
                   </br>
                   Experience with integration tool of Docker and control system of Git/GitHub
                  </spane>                   
                   }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={crown}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
