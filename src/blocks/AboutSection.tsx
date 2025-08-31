import Heading1 from "../typography/Heading1";
import "../styles/sections.css";

const AboutSection = () => {
  return (
    <section className="section about" id="aboutSection">
      <div className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:px-8 p-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="spacer"></div>
          <Heading1 text="About" />
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Hi, my name is Jayden. I'm a junior at UNC Chapel Hill majoring in
            CS and music. In my free time, I really enjoy all things music. I'm
            always listening to something, I collect vinyl records, go to
            concerts, play the guitar, and sing. Besides this, I run (currently
            training for a half-marathon), play video games, journal, and watch
            TV (mostly sitcoms). As for my career, my long-term goal is to be a
            software engineer in a capacity that drives social change within
            marginalized communities. For right now, I am building my skills in
            web development and hoping to become more skilled in designing and
            building scalable applications that not only solve technical
            challenges but also make a positive impact on the people who use
            them.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default AboutSection;
