import { CSSProperties } from "react";
import CourseHero from "../component/hero/courseHero/CourseHero";
import Subscription from "../component/subscription/Subscription";

// Set the page title
const pageTitle = () => (document.title = "Courses");
pageTitle();

const Courses = () => {
  return (
    <div>
      <section style={heroSection}>
        <CourseHero />
      </section>
      <section>
        <Subscription />
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
