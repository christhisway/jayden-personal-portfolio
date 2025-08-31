import "../styles/sections.css";
import Heading1 from "@/typography/Heading1";

const SkillsSection = () => {
  return (
    <div className="section skills" id="skillsSection">
      <div className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:px-8 p-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="spacer"></div>
          <Heading1 text="Skills" />
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Below are some of my relevant skills.
          </p>
          <div className="skillList">
            <div>
              <h2 className="text-xl font-semibold mb-2">Languages</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Java</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C#</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Frameworks and Tools
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>React</li>
                <li>Kubernetes</li>
                <li>Node.js</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
