import { useState } from "react";
import "./App.css";
import NavBar from "./blocks/NavBar";
import AboutSection from "./blocks/AboutSection";
import ClassesSection from "./blocks/ClassesSection";
import SkillsSection from "./blocks/SkillsSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="appContainer">
      <NavBar />
      <div className="page">
        <div id="aboutSection">
          <AboutSection />
        </div>
        <div id="classesSection">
          <ClassesSection />
        </div>
        <div id="skillsSection">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}

export default App;
