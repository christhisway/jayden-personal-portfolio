import Heading1 from "@/typography/Heading1";
import "../styles/sections.css";

const HeaderSection = () => {
  return (
    <section className="section header" id="hero">
      <div className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:px-8 p-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="spacer"></div>
          <Heading1 text="Jayden Webb" />
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Hello. My name is Jayden Webb, and I'm a Computer Science and Music
            major in my third year of university at the University of North
            Carolina at Chapel Hill.
          </p>
        </div>
        <div>
          <img
            src="src/assets/Open Headshot.jpeg"
            className="rounded-lg shadow-lg max-w-xs w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
