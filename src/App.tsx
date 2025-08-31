import "./App.css";
import NavBar from "./blocks/NavBar";
import AboutSection from "./blocks/AboutSection";
import ClassesSection from "./blocks/ClassesSection";
import SkillsSection from "./blocks/SkillsSection";
import HeaderSection from "./blocks/HeaderSection";

function App() {
  return (
    <div className="appContainer">
      <NavBar />
      <div className="page">
        <HeaderSection />
        <AboutSection />
        <ClassesSection />
        <SkillsSection />
      </div>
    </div>
  );
}

export default App;
