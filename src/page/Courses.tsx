import { CSSProperties } from "react";
import CourseHero from "../component/hero/courseHero/CourseHero";

const Courses = () => {
  return (
    <div>
      <section style={heroSection}>
        <CourseHero />
      </section>
    </div>
  );
};

export default Courses;

const heroSection: CSSProperties = {
  padding: "50px 5%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
