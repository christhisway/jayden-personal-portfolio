import "../styles/sections.css";
import Heading1 from "@/typography/Heading1";

const ClassesSection = () => {
  return (
    <div className="section classes" id="classesSection">
      <div className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:px-8 p-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="spacer"></div>
          <Heading1 text="Classes" />
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>COMP 110: Introduction to Programming</li>
              <li>COMP 283: Discrete Structures</li>
              <li>COMP 210: Data Structures</li>
              <li>COMP 211: Systems Fundamentals</li>
              <li>COMP 301: Foundations of Programming</li>
              <li>COMP 311: Computer Organization</li>
              <li>COMP 426: Modern Web Programming</li>
            </ul>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ClassesSection;
